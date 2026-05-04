import { Routes, Route } from 'react-router-dom'
import { V2Layout } from './components/layout/V2Layout'
import { PlaceholderPage } from './pages/_Placeholder'
import { Home } from './pages/Home'
import { Listing } from './pages/Listing'
import { Detail } from './pages/Detail'
import { Cart } from './pages/Cart'
import { Checkout } from './pages/Checkout'
import { Profile } from './pages/Profile'
import { ProfileEdit } from './pages/ProfileEdit'
import { Manufacturers } from './pages/Manufacturers'
import { Collections } from './pages/Collections'
import { CollectionDetail } from './pages/CollectionDetail'
import { Swaps } from './pages/Swaps'
import { SwapDetail } from './pages/SwapDetail'
import { CreateListing } from './pages/CreateListing'
import { Notifications } from './pages/Notifications'
import { Messages } from './pages/Messages'
import { Orders } from './pages/Orders'
import { Offers } from './pages/Offers'
import { Membership } from './pages/Membership'
import { Auth } from './pages/Auth'

export default function V2App() {
  return (
    <Routes>
      <Route element={<V2Layout />}>
        <Route index element={<Home />} />
        <Route path="ilanlar" element={<Listing />} />
        <Route path="ilan/:id" element={<Detail />} />
        <Route path="sepet" element={<Cart />} />
        <Route path="odeme" element={<Checkout />} />
        <Route path="profil" element={<Profile />} />
        <Route path="profil/duzenle" element={<ProfileEdit />} />
        <Route path="marka" element={<Manufacturers />} />
        <Route path="marka/:slug" element={<Manufacturers />} />
        <Route path="koleksiyonlar" element={<Collections />} />
        <Route path="koleksiyon/:id" element={<CollectionDetail />} />
        <Route path="takaslar" element={<Swaps />} />
        <Route path="takas/:id" element={<SwapDetail />} />
        <Route path="ilan-olustur" element={<CreateListing />} />
        <Route path="bildirimler" element={<Notifications />} />
        <Route path="mesajlar" element={<Messages />} />
        <Route path="siparisler" element={<Orders />} />
        <Route path="teklifler" element={<Offers />} />
        <Route path="uyelik" element={<Membership />} />
        <Route path="giris" element={<Auth />} />
        <Route path="kayit" element={<Auth />} />
        <Route
          path="*"
          element={
            <PlaceholderPage
              title="Sayfa bulunamadı"
              subtitle="Aradığınız sayfa V2'de henüz yok."
            />
          }
        />
      </Route>
    </Routes>
  )
}
