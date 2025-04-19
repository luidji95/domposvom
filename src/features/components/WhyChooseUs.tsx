import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="whychooseus-main">
      <div className="whychooseus-title">
        <h3>Zašto baš mi?</h3>
      </div>

      <div className="whychooseus-content">
        <div className="quality">
          <img
            src="images/icons/award-badge (1).png"
            className="whychooseus-icons"
          />
          <p className="why-title">Vrhunska izrada</p>
          <p className="why-desc">
            Ručno izrađen nameštaj od pažljivo odabranih materijala, uz fokus na
            dugotrajnost i kvalitet.
          </p>
        </div>

        <div className="materials">
          <img
            src="images/icons/organic-product (1).png"
            className="whychooseus-icons"
          />
          <p className="why-title">Ekološki materijali</p>
          <p className="why-desc">
            Koristimo održive resurse i materijale koji čuvaju prirodu — spoj
            udobnosti i odgovornosti.
          </p>
        </div>

        <div className="delivery">
          <img
            src="images/icons/fast-delivery (1).png"
            className="whychooseus-icons"
          />
          <p className="why-title">Dostava širom Srbije</p>
          <p className="why-desc">
            Brza i pouzdana isporuka na vašu adresu, bez obzira gde se nalazite.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
