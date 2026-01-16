import Link from "next/link";

const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/technology/summitintro.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Împreună pentru comunități</h3>
              {/* <div className="line">
                <span />
              </div> */}
            </div>
            <div className="desc">
              <p>
          Noi credem că nicio familie sau persoană vulnerabilă nu ar trebui să se simtă singură. În județul nostru, provocările sociale se suprapun: sărăcia, lipsa accesului la educație și la servicii medicale afectează pe toată lumea din comunitate. De aceea, intervenim acolo unde nevoia este cea mai mare și construim o rețea de sprijin care să ajungă la fiecare colț al comunității.
  </p>
  <p>
         Misiunea noastră este clară: identificăm și susținem persoanele vulnerabile, creștem accesul la educație și sănătate, și activăm comunitățile prin voluntariat și responsabilizare. Fiecare acțiune pe care o întreprindem are un impact direct și real, iar împreună putem transforma destine.</p>
  <p>
        Solidaritatea nu este un lux, ci o nevoie fundamentală. Prin parteneriate cu autorități, ONG-uri și mediul privat, ne asigurăm că fiecare inițiativă este eficientă și durabilă, iar beneficiile ajung exact acolo unde sunt necesare.
  </p>
            </div>
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/technology/galaplace.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Sprijin și acțiuni</h3>
            </div>
            <div className="desc">
              <p>
              Intervenim prin programe și activități menite să răspundă nevoilor urgente ale comunităților vulnerabile. Ne concentrăm pe educație, sănătate și suport social, dar și pe condiții minime de trai: locuință, igienă și utilități de bază. Fiecare inițiativă este gândită pentru a crea rezultate tangibile și pentru a ajuta oamenii să își recâștige încrederea și speranța.
              </p>
                  <p>
                   Acțiunile noastre sunt adaptate nevoilor locale. Prin colaborarea cu lideri comunitari, cadre didactice și asistenți sociali, identificăm problemele devreme și intervenim rapid, înainte ca situațiile să se agraveze.
                  </p>
          <p>
Lucrăm în construirea unei rețele locale de sprijin, flexibilă și replicabilă, care să devină un punct de referință pentru comunitate și să inspire alte inițiative similare.
          </p>
                 
             
      
            </div>
          </div>
        </div>
        {/* !About Item #2 */}
              {/* About Item #3 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/technology/reach.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Parte din schimbare</h3>
            </div>
            <div className="desc">
              <p>
             Voluntariatul este inima asociației RUA. Fiecare persoană care se implică devine un pilon de sprijin pentru cei aflați în dificultate. Poți contribui prin sesiuni educaționale, activități sociale, sprijin direct pentru familii sau prin organizarea de evenimente care să unească comunitatea.
              </p>
               <p>
                  Implicarea voluntarilor nu doar ajută, ci și inspiră. Prin efortul colectiv, construim o rețea locală puternică, capabilă să identifice problemele devreme și să răspundă rapid. Orice gest de ajutor devine o punte între oameni și transformă viața celor care au cea mai mare nevoie.
                    </p>
  <p> Te invităm să te alături inițiativelor noastre. Fiecare oră dedicată, fiecare zâmbet oferit și fiecare resursă pusă la dispoziție contribuie la construirea unei comunități mai sigure, mai unite și mai empatică. Împreună putem face diferența! </p>

            </div>
          </div>
        </div>
        {/* !About Item #3 */}
      </div>
    </section>
  );
};
export default AboutComponent;
