import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import TeamPage from "./pages/Team";
import TeamMemberPage from "./pages/TeamMember";
import InsightsPage from "./pages/Insights";
import InsightArticlePage from "./pages/InsightArticle";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFoundPage from "./pages/NotFoundPage";
import LegacyProfilePage from "./pages/LegacyProfilePage";

function App() {
  const path = window.location.pathname.toLowerCase();

  if (path === "/about") {
    return <AboutPage />;
  }

  if (path === "/services") {
    return <ServicesPage />;
  }

  if (path === "/team") {
    return <TeamPage />;
  }

  if (path.startsWith("/team/")) {
    const slug = path.replace("/team/", "").trim();
    return <TeamMemberPage slug={slug} />;
  }

  if (path === "/insights") {
    return <InsightsPage />;
  }

  if (path.startsWith("/insights/")) {
    const slug = path.replace("/insights/", "").trim();
    return <InsightArticlePage slug={slug} />;
  }

  if (path === "/contact") {
    return <ContactPage />;
  }

  if (path === "/terms") {
    return <TermsPage />;
  }

  if (path === "/privacy") {
    return <PrivacyPage />;
  }

  if (path.startsWith("/legacy/")) {
    const slug = path.replace("/legacy/", "").trim();
    return <LegacyProfilePage slug={slug} />;
  }

  if (path === "/") {
    return <Home />;
  }

  return <NotFoundPage />;
}

export default App;
