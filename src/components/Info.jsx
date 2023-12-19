import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";

const Info = () => {
  return (
    <main>
      <Container className="pt-3 pt-sm-4">
        <section className="mb-4">
          <div>
            <h2 className="fs-1 fw-bold mb-3">Importance of Blood Donation</h2>
            <p className="fs-6">
              Blood donation is a crucial act that saves lives and contributes to the well-being of the community. There
              are several reasons why blood donation is so important:
            </p>
            <Row md={3} lg={4} role="list" className="ps-0 row-cols-1 row-cols-sm-2 row-gap-3 pt-2">
              <Col>
                <div className="d-flex flex-column  rounded-3 custom-bg-primary-l h-100 p-3">
                  <h3 className="fs-3 fw-bold fw-bold mb-3">Saving Human Lives</h3>
                  <p className="custom-fs-6 m-0 mt-auto ">
                    Donated blood is essential for treating patients with severe medical conditions, including
                    accidents, surgeries, and blood disorders.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="d-flex  flex-column rounded-3  custom-bg-primary-l h-100 p-3">
                  <h3 className="fs-3 fw-bold mb-3">Supporting Medical Treatments</h3>
                  <p className="custom-fs-6 m-0 mt-auto ">
                    Many medical therapies, such as those for cancer and chronic diseases, require blood transfusions to
                    be effective.
                  </p>
                </div>
              </Col>
              <Col>
                <div className="d-flex flex-column  rounded-3 custom-bg-primary-l h-100 p-3">
                  <h3 className="fs-3 fw-bold mb-3"> Assisting Chronic Patients</h3>
                  <p className="custom-fs-6 m-0 mt-auto ">
                    Individuals with chronic illnesses, such as anemia or thalassemia, often depend on blood donations
                    to manage their health conditions.
                  </p>
                </div>
              </Col>
              <Col md={12}>
                <div className="d-flex flex-column  rounded-3 custom-bg-primary-l h-100 p-3">
                  <h3 className="fs-3 fw-bold mb-3">Responding to Disasters</h3>
                  <p className="custom-fs-6 m-0 mt-auto ">
                    In the event of natural disasters or emergency situations, the availability of donated blood is
                    crucial to quickly address medical needs.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="mb-4">
          <div>
            <h2 className="fs-1 fw-bold mb-3">Who can donate?</h2>
            <Row className="bg-info-custom">
              <Col xs={12} lg={4} className="mb-md-2 mb-lg-0">
                <div className="p-3 d-flex flex-column h-100">
                  <h3 className="fs-3 fw-bold mb-3">Age between 18 and 65 years</h3>
                  <p className="mt-auto m-0">
                    Blood donation from regular donors over the age of 65 may be allowed (up to 70 years) following a
                    clinical evaluation of key age-related risk factors.
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} className="mb-2 mb-sm-0">
                <div className="p-3 d-flex flex-column h-100">
                  <h3 className="fs-3 fw-bold mb-3">Weigh more than 50kg</h3>
                  <p className="mt-auto m-0">
                    To safeguard the donor&apos;s health during blood or blood component donations, a minimum weight of
                    50kg is required.
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={6} lg={4} className="mb-2 mb-sm-0">
                <div className="p-3 d-flex flex-column h-100">
                  <h3 className="fs-3 fw-bold mb-3">Good health</h3>
                  <p className="mt-auto m-0">
                    These factors may result in temporary or permanent suspension from donation to preserve the health
                    of both the donor and the recipient.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="mb-4 border border-start-0 border-end-0 border-danger border-3">
          <h2 className="fs-1 fw-bold text-center pt-2 mb-2 mb-sm-0">How do we do it?</h2>
          <Row>
            <Col id="no-border" xs={12} md={6} className="border-end border-danger border-3 my-sm-3">
              <h3 className="fs-3 fw-bold mb-3">Clinical Evaluation</h3>
              <p>
                Before donation, it is necessary to complete a medical history questionnaire and undergo an interview
                with medical personnel. These two steps are important to ensure that the prospective donor meets the
                requirements for donation and to determine the most suitable type of donation.
              </p>
              <ol>
                <li>Verification of the donor&apos;s identity.</li>
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
            <Col xs={12} md={6} className="my-sm-3">
              <h3 className="fs-3 fw-bold mb-3">For each donation, the donor undergoes the following tests:</h3>
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
              <h3 className="fs-3 fw-bold mb-3">Annually, the donor undergoes the following tests:</h3>
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
          <div>
            <h2 className="fs-2 fw-bold mb-3">What to do before donating?</h2>
            <div>
              <p className="mb-4 ms-4 ms-sm-0 position-relative fs-6 circle-pink">
                Avoid staying up late: sleep is an ally for donors.
              </p>
              <p className="mb-4 ms-4 ms-sm-0 position-relative fs-6 circle-pink">
                Have a light breakfast, avoiding fats and dairy.
              </p>
              <p className="mb-4 ms-4 ms-sm-0 position-relative fs-6 circle-pink">
                Refrain from smoking close to the time of donation.
              </p>
            </div>
          </div>
          <h2 className="fs-2 fw-bold mb-3">What to do during donation?</h2>
          <div>
            <p className="mb-4 ms-4 ms-sm-0 position-relative fs-6 circle-yellow">
              If you fear needles, talk to the nursing staff: they can help put you at ease.If you fear needles, talk to
              the nursing staff: they can help put you at ease.
            </p>
            <p className="mb-4 ms-4 ms-sm-0 position-relative fs-6 circle-yellow">
              Clench and open the palm of the hand from which you are donating.
            </p>
            <p className="mb-4 ms-4 ms-sm-0 position-relative fs-6 circle-yellow">
              Relax and do not cross your legs, as it may hinder blood flow.
            </p>
          </div>
          <h2 className="fs-2 fw-bold mb-3">What to do after donation?</h2>
          <div role="list">
            <p className="mb-4 ms-4 ms-sm-0 position-relative fs-6 circle-blue">
              Allow yourself a day of rest and avoid physical exertion.
            </p>
            <p className="mb-4 ms-4 ms-sm-0 position-relative fs-6 circle-blue">
              Avoid consuming heavy foods to prevent physical fatigue.
            </p>
            <p className="mb-4 ms-4 ms-sm-0 position-relative fs-6 circle-blue">
              Rehydrate: it is recommended to drink plenty of fluids throughout the day.
            </p>
          </div>
        </section>
      </Container>
      <footer className="custom-bg-accent-l d-flex justify-content-center align-items-center">
        <Footer></Footer>
      </footer>
    </main>
  );
};
export default Info;
