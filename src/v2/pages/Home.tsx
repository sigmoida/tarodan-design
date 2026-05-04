import { Hero } from '../components/sections/Hero'
import { InfoStrip } from '../components/sections/InfoStrip'
import { CategoryGrid } from '../components/sections/CategoryGrid'
import { BrandsStrip } from '../components/sections/BrandsStrip'
import { ProductGrid } from '../components/sections/ProductGrid'
import { NewArrivals } from '../components/sections/NewArrivals'
import { ScaleSelector } from '../components/sections/ScaleSelector'
import { WeeklySpotlight } from '../components/sections/WeeklySpotlight'
import { CollectionsRow } from '../components/sections/CollectionsRow'
import { CTABlocks } from '../components/sections/CTABlocks'
import { ArticlesGrid } from '../components/sections/ArticlesGrid'
import { Testimonials } from '../components/sections/Testimonials'
import { Newsletter } from '../components/sections/Newsletter'

export function Home() {
  return (
    <>
      <Hero />
      <InfoStrip />
      <CategoryGrid />
      <BrandsStrip />
      <ProductGrid
        title="Bu ayın en çok satanları"
        subtitle="Topluluğumuzun bu ay en çok tercih ettiği modeller."
      />
      <NewArrivals />
      <ScaleSelector />
      <WeeklySpotlight />
      <CollectionsRow />
      <CTABlocks />
      <ArticlesGrid />
      <Testimonials />
      <Newsletter />
    </>
  )
}
