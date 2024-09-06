export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Auto School. All rights reserved.</p>
          <div className="mt-2">
            <a href="https://www.facebook.com/Aghilesrougi/?locale=fr_FR" className="mx-2">Facebook</a>
            <a href="https://www.tiktok.com/@izem_aghiles16" className="mx-2">TikTok</a>
            <a href="https://www.instagram.com/auto_ecole_izem_aghiles/" className="mx-2">Instagram</a>
          </div>
        </div>
      </footer>
    );
  }
  