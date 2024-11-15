'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface ServiceMapProps {
  center: { lat: number; lng: number }
  coverage: { name: string; coordinates: number[] }[]
  hoveredCity: string | null
}

export default function ServiceMap({ center, coverage, hoveredCity }: ServiceMapProps) {
  const mapRef = useRef<L.Map | null>(null)
  const markersRef = useRef<{ [key: string]: L.Marker }>({})

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!mapRef.current) {
        mapRef.current = L.map('map', {
          center: [center.lat, center.lng],
          zoom: 11,
          zoomControl: false,
          attributionControl: false,
        })

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
        }).addTo(mapRef.current)

        // Add service radius circle
        L.circle([center.lat, center.lng], {
          color: '#0A5C99',
          fillColor: '#0A5C99',
          fillOpacity: 0.1,
          radius: 24140, // 15 miles in meters
        }).addTo(mapRef.current)

        // Add markers for coverage areas
        coverage.forEach((area) => {
          const marker = L.marker(area.coordinates, {
            icon: L.divIcon({
              className: 'custom-marker',
              html: `<div class="w-3 h-3 bg-[#0A5C99] rounded-full"></div>`,
            })
          }).addTo(mapRef.current!)

          markersRef.current[area.name] = marker
        })
      }
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (hoveredCity && markersRef.current[hoveredCity]) {
      const marker = markersRef.current[hoveredCity]
      marker.setIcon(
        L.divIcon({
          className: 'custom-marker-active',
          html: `<div class="w-4 h-4 bg-[#1E88E5] rounded-full animate-pulse"></div>`,
        })
      )
    } else {
      Object.values(markersRef.current).forEach((marker) => {
        marker.setIcon(
          L.divIcon({
            className: 'custom-marker',
            html: `<div class="w-3 h-3 bg-[#0A5C99] rounded-full"></div>`,
          })
        )
      })
    }
  }, [hoveredCity])

  return <div id="map" className="h-full w-full rounded-lg" />
}