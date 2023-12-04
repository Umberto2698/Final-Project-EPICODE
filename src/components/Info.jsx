import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";

const Info = () => {
  return (
    <main className="linear-gradient-acc-100">
      <Container className="pt-5">
        <section>
          <Row>
            <Col>
              <h2>Importance og Blood Donation</h2>
              <p>
                Blood donation is a crucial act that saves lives and contributes to the well-being of the community.
                There are several reasons why blood donation is so important:
              </p>
              <ul role="list">
                <li>
                  <h3>Saving Human Lives</h3>
                  <p>
                    Donated blood is essential for treating patients with severe medical conditions, including
                    accidents, surgeries, blood disorders, and other emergency situations.
                  </p>
                </li>
                <li>
                  <h3>Supporting Medical Treatments</h3>
                  <p>
                    Many medical therapies, such as those for cancer and chronic diseases, require blood transfusions to
                    be effective.
                  </p>
                </li>
                <li>
                  <h3> Assisting Chronic Patients</h3>
                  <p>
                    Individuals with chronic illnesses, such as anemia or thalassemia, often depend on blood donations
                    to manage their health conditions.
                  </p>
                </li>
                <li>
                  <h3>Responding to Disasters</h3>
                  <p>
                    In the event of natural disasters or emergency situations, the availability of donated blood is
                    crucial to quickly address medical needs.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </section>
        <section>
          <Row>
            <h2>Who can donate?</h2>
            <Col>
              <h3>Age between 18 and 65 years</h3>
              <p>
                Blood donation from regular donors over the age of 65 may be allowed (up to 70 years) following a
                clinical evaluation of key age-related risk factors.
              </p>
            </Col>
            <Col>
              <h3>Weigh more than 50kg</h3>
              <p>
                To safeguard the donor's health during blood or blood component donations, a minimum weight of 50kg is
                required.
              </p>
            </Col>
            <Col>
              <h3>Good health</h3>
              <p>
                Those who are not in good health or engage in risky behaviors are not eligible to donate. These factors
                may result in temporary or permanent suspension from donation to preserve the health of both the donor
                and the recipient.
              </p>
            </Col>
          </Row>
        </section>
        <section>
          <h2>How do we do it?</h2>
          <Row>
            <Col>
              <h3>Clinical Evaluation</h3>
              <p>
                Before donation, it is necessary to complete a medical history questionnaire and undergo an interview
                with medical personnel. These two steps are important to ensure that the prospective donor meets the
                requirements for donation and to determine the most suitable type of donation.
              </p>
              <ol>
                <li>Verification of the donor's identity.</li>
                <li>Completion of a questionnaire.</li>
                <li>Interview with a doctor and assessment of overall health conditions.</li>
                <li>Obtaining informed consent for donation.</li>
              </ol>
              <p>
                In transfusion services/departments that perform deferred donation, health investigations are conducted
                for new donors and those who have not donated for over 2 years. Otherwise, the process proceeds directly
                to donation.
              </p>
            </Col>
            <Col>
              <h3>For each donation, the donor undergoes the following tests:</h3>
              <ul>
                <li>Complete blood count.</li>
                <li>Serological test for Treponema Pallidum (the causative agent of syphilis).</li>
                <li>
                  Direct viral sequence detection (NAT) and antibodies against HIV1-2 (virus responsible for AIDS).
                </li>
                <li>
                  Direct viral sequence detection (NAT) and antibodies against HCV (virus responsible for hepatitis C).
                </li>
                <li>
                  Direct viral sequence detection (NAT), surface antigen (HBsAg), and antibodies against HBV (virus
                  responsible for hepatitis B).
                </li>
              </ul>
              <h3>Annually, the donor undergoes the following tests:</h3>
              <ul>
                <li>Blood sugar level (Glycemia).</li>
                <li>Creatinine level.</li>
                <li>Alanine aminotransferase.</li>
                <li>Total cholesterol and HDL cholesterol.</li>
                <li>Triglyceride level.</li>
                <li>Total protein level.</li>
                <li>Ferritin level.</li>
              </ul>
            </Col>
          </Row>
        </section>
        <section>
          <h2>What to do before donating?</h2>
          <ol>
            <li>Avoid staying up late: sleep is an ally for donors.</li>
            <li>Have a light breakfast, avoiding fats and dairy.</li>
            <li>Refrain from smoking close to the time of donation.</li>
          </ol>
          <h2>What to do during donation?</h2>
          <ol>
            <li>
              If you fear needles, talk to the nursing staff: they can help put you at ease.If you fear needles, talk to
              the nursing staff: they can help put you at ease.
            </li>
            <li>Clench and open the palm of the hand from which you are donating.</li>
            <li>Relax and do not cross your legs, as it may hinder blood flow.</li>
          </ol>
          <h2>What to do after donation?</h2>
          <ol>
            <li>Allow yourself a day of rest and avoid physical exertion.</li>
            <li>Avoid consuming heavy foods to prevent physical fatigue.</li>
            <li>Rehydrate: it is recommended to drink plenty of fluids throughout the day.</li>
          </ol>
        </section>
      </Container>
      <footer className="custom-bg-accent-l d-flex justify-content-center align-items-center">
        <Footer></Footer>
      </footer>
    </main>
  );
};
export default Info;
