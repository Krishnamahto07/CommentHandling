import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";

function App2() {
  return (
    <MDBContainer fluid className="mb-2 bg-slate-50 h-[200px] w-[200px]   font-semibold px-5 pb-3 hover:scale-95 transition-all duration-200 ease-linear hover:shadow-white shadow-2xl hover:border-black rounded-md">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard className="text-black">
            <MDBIcon fab icon="apple" size="lg" className="px-3 pt-1 pb-1" />
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
              position="top"
              alt="Apple Computer"
            />
            <MDBCardBody>
              <div className="text-center">
                <p className="text-muted mb-2">Apple pro </p>
              </div>
              <div className="d-flex justify-content-between total font-weight-bold mt-1 text-center">
                <span>Total</span>
                <span>$7,197.00</span>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App2;