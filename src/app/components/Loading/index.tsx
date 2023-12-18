import CardGridLayout from '@/app/layout/CardGridLayout'
import React from 'react'
import SkeletonComponent from './skeleton'

export default function Loading() {
  return (
    <CardGridLayout>
      <SkeletonComponent/>
      <SkeletonComponent/>
      <SkeletonComponent/>
      <SkeletonComponent/>
      <SkeletonComponent/>
      <SkeletonComponent/>
      <SkeletonComponent/>
      <SkeletonComponent/>
      <SkeletonComponent/>
    </CardGridLayout>
  )
}
