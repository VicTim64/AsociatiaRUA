import Link from "next/link";

const EnAboutComponent = () => {
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
              <h3 className="fn_title">Together for communities!</h3>
              {/* <div className="line">
                <span />
              </div> */}
            </div>
            <div className="desc">
              <p>
         We believe that no vulnerable family or individual should feel alone. In our county, social challenges overlap: poverty, lack of access to education, and limited healthcare affect everyone in the community. That is why we intervene where the need is greatest and build a support network that reaches every corner of the community. </p>
  <p>
       Our mission is clear: we identify and support vulnerable individuals, increase access to education and healthcare, and activate communities through volunteering and responsibility. Every action we take has a direct and real impact, and together we can transform lives. <p>
       Solidarity is not a luxury, but a fundamental need. Through partnerships with authorities, NGOs, and the private sector, we ensure that every initiative is effective and sustainable, and that the benefits reach exactly where they are needed.
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
             We intervene through programs and activities designed to address the urgent needs of vulnerable communities. We focus on education, health, and social support, as well as minimum living conditions: housing, hygiene, and basic utilities. Every initiative is designed to create tangible results and help people regain their confidence and hope.</p>
                  <p>
                  Our actions are tailored to local needs. By collaborating with community leaders, teachers, and social workers, we identify problems early and intervene quickly, before situations worsen. </p>
          <p>
We work on building a local support network that is flexible and replicable, designed to become a reference point for the community and to inspire other similar initiatives.
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
              <h3 className="fn_title">Part of a change</h3>
            </div>
            <div className="desc">
              <p>
            Volunteering is the heart of the RUA association. Every person who gets involved becomes a pillar of support for those in need. You can contribute through educational sessions, social activities, direct support for families, or by organizing events that bring the community together. </p>
               <p>
                  Volunteer involvement not only helps, but also inspires. Through collective effort, we build a strong local network capable of identifying problems early and responding quickly. Every act of help becomes a bridge between people and transforms the lives of those who need it most.  </p>
  <p> We invite you to join our initiatives. Every hour you dedicate, every smile you give, and every resource you provide contributes to building a safer, more united, and more empathetic community. Together, we can make a difference! </p>

            </div>
          </div>
        </div>
        {/* !About Item #3 */}
      </div>
    </section>
  );
};
export default EnAboutComponent;
