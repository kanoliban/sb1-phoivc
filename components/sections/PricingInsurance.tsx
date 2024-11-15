'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Shield, Clock, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

const pricingData = [
  {
    title: "Basic Care",
    price: "85",
    duration: "30-45 min",
    features: [
      "Basic nail trimming",
      "Health assessment",
      "Care documentation",
      "Basic foot check"
    ]
  },
  {
    title: "Complete Care",
    price: "125",
    duration: "45-60 min",
    features: [
      "Advanced nail care",
      "Detailed health assessment",
      "Preventive screening",
      "Care plan development",
      "Follow-up scheduling"
    ],
    popular: true
  },
  {
    title: "Premium Care",
    price: "165",
    duration: "60-75 min",
    features: [
      "Comprehensive care",
      "Extended assessment",
      "Family consultation",
      "Specialized treatments",
      "Priority scheduling",
      "24/7 nurse support"
    ]
  }
]

export default function PricingInsurance() {
  return (
    <section id="pricing" className="py-16 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0A5C99] mb-12">Pricing & Insurance</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className={`h-full relative flex flex-col ${plan.popular ? 'border-[#0A5C99] border-2' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-[#0A5C99] text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#0A5C99]">
                    {plan.title}
                  </CardTitle>
                  <div className="flex items-baseline mt-4">
                    <span className="text-3xl font-bold text-[#2D3748]">${plan.price}</span>
                    <span className="ml-2 text-gray-500">/visit</span>
                  </div>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {plan.duration}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-[#2D3748]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-[#0A5C99] hover:bg-[#1E88E5]">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-[#0A5C99] text-center mb-8">Insurance Coverage</h3>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-[#2D3748] mb-4">Accepted Insurance</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-[#1E88E5] mr-2" />
                  <span>Medicare (with qualifying conditions)</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-[#1E88E5] mr-2" />
                  <span>Blue Cross Blue Shield</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-[#1E88E5] mr-2" />
                  <span>Aetna</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 text-[#1E88E5] mr-2" />
                  <span>UnitedHealthcare</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#2D3748] mb-4">Coverage Details</h4>
              <p className="text-gray-600 mb-4">
                Coverage varies by plan and medical necessity. We'll help verify your benefits and provide necessary documentation for reimbursement.
              </p>
              <Button variant="outline" className="border-[#0A5C99] text-[#0A5C99] hover:bg-[#0A5C99] hover:text-white">
                Verify Coverage
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}