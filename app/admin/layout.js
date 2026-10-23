// Private lead table: never indexed, never linked, not in the sitemap.
export const metadata = {
  title: "Leads | Fix It Jerry Admin",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function AdminLayout({ children }) {
  return children;
}
