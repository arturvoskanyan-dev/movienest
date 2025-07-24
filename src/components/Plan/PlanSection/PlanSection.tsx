import React from 'react'
import PlanItem from '../PlanItem/PlanItem'
import { PlanTypes } from '../../../types/types'

export default function PlanSection() {
    const planItems: Array<PlanTypes> = [
        {id: 1, title: "Basic Plan", price: 9.99, info: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."},
        {id: 2, title: "Standard Plan", price: 12.99, info: "Access to a wider selection of movies and shows, including most new releases and exclusive content"},
        {id: 3, title: "Premium Plan", price: 14.99, info: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing"}
    ]

    return planItems.map((plan) => <PlanItem key={plan.id} plan={plan} />)
}
