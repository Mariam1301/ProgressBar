import { Checkout as SourceCheckout } from "/home/mariam/Desktop/ScandiPWA/scandi-app/node_modules/@scandipwa/scandipwa/src/route/Checkout/Checkout.component";
import "./Checkout.extension.style";
import ContentWrapper from "@scandipwa/scandipwa/src/component/ContentWrapper";

class Checkout extends SourceCheckout {
  renderProgress() {
    let steps = Object.keys(this.stepMap);
    let checkout = this.props.checkoutStep;
    let currentIndex = steps.indexOf(checkout);
    return (
      <div className="progress">
        {steps.map((step, index) => (
          <div>
            <div
              id={"line" + index}
              className={index < currentIndex + 1 ? "line active" : "line"}
            ></div>
            <div>
              <div
                className={
                  index < currentIndex + 1 ? "circle active" : "circle"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  class="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </div>
              <div className="step">{this.stepMap[step].title.value}</div>
            </div>
          </div>
        ))}
        <div className="line"></div>
      </div>
    );
  }
  render() {
    return (
      <main block="Checkout">
        {this.renderProgress()}
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}
export default Checkout;
