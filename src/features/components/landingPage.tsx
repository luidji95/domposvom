import "./LandingPage.css";
import Header from "../../layout/Header";

const LandingPage = () => {
  return (
    <div className="landing-page-main">
      <Header />
      <p className="landing-subtitle landing-p animate-from-left">
        Verujemo da vaš dom treba da odražava vašu ličnost. <br />
        Zato izrađujemo unikatni nameštaj, po vašoj meri – <br />
        sa stilom, funkcijom i dušom. <br />
        Svaki komad koji pravimo nosi vašu priču. <br />
        Kreirajte prostor u kojem ćete zaista želeti da boravite.
      </p>

      <h1 className="landing-title animate-from-right">
        <span className="word word-1">Dom</span>
        <span className="word word-2">Po</span>
        <span className="word word-3">Svom</span>
      </h1>
    </div>
  );
};

export default LandingPage;
