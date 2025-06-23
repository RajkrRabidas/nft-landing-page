import React from "react";
import "./Marquee.css";
import BehanceImgage from "../../../public/images/behance.png";
import lcxImgage from "../../../public/images/lcx-logo.png";
import bitfinesImgage from "../../../public/images/bitfines.png";
import blockchainImgage from "../../../public/images/blockchain.png";

const Marquee = () => {
  return (
    <div className="relative">
      <section class="view-2">
        <div class="marquee">
          <div class="text">
            <p><i>PayPal</i></p>
            <p>coinbase</p>
            <p>
              <img className="behance" src={BehanceImgage} alt="" />
              Behance
            </p>
            <p>
              <img className="lcx" src={lcxImgage} alt="" />
              LCX
            </p>
            <p>
              <img className="bitfines" src={bitfinesImgage} alt="" />
            </p>
            <p>
              <img className="blockchain" src={blockchainImgage} alt="" />
              Blockchain
            </p>
          </div>
          <div class="text">
            <p><i>PayPal</i></p>
            <p>coinbase</p>
            <p>
              <img className="behance" src={BehanceImgage} alt="" />
              Behance
            </p>
            <p>
              <img className="lcx" src={lcxImgage} alt="" />
              LCX
            </p>
            <p>
              <img className="bitfines" src={bitfinesImgage} alt="" />
            </p>
            <p>
              <img className="blockchain" src={blockchainImgage} alt="" />
              Blockchain
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marquee;
