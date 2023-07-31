import React from "react";
import { BiTwitter } from "../../components/BiTwitter";
import { Button } from "../../components/Button";
import { Buttonfill } from "../../components/Buttonfill";
import { GameIconsPayMoney } from "../../components/GameIconsPayMoney";
import { GisGlobeShare } from "../../components/GisGlobeShare";
import { IcBaselineWhatsapp } from "../../components/IcBaselineWhatsapp";
import { IcRoundSendTo } from "../../components/IcRoundSendTo";
import { IconParkOutline } from "../../components/IconParkOutline";
import { MajesticonsRocket } from "../../components/MajesticonsRocket";
import { MaterialSymbols } from "../../components/MaterialSymbols";
import { NavBar } from "../../components/NavBar";
import { PhInstagramLogo } from "../../components/PhInstagramLogo";
import { RiFacebookBoxFill } from "../../components/RiFacebookBoxFill";
import { RiLinkedinFill } from "../../components/RiLinkedinFill";
import { UilYoutube } from "../../components/UilYoutube";
import { MaterialSymbolsArrowDropDown } from "../../icons/MaterialSymbolsArrowDropDown";
import footStep3 from "../../img/footsteps-silhouette-variant 3.svg";
import footStep4 from "../../img/footsteps-silhouette-variant 4.svg";
import footStep5 from "../../img/footsteps-silhouette-variant 5.svg";
import footStep6 from "../../img/footsteps-silhouette-variant 6.svg";
import footStep7 from "../../img/footsteps-silhouette-variant 7.svg";
import footStep8 from "../../img/footsteps-silhouette-variant 8.svg";
import footStep9 from "../../img/footsteps-silhouette-variant 9.svg";
import footStep10 from "../../img/footsteps-silhouette-variant 10.svg";
import footStep11 from "../../img/footsteps-silhouette-variant 11.svg";
import footStep12 from "../../img/footsteps-silhouette-variant 12.svg";
import footStep13 from "../../img/footsteps-silhouette-variant 13.svg";
import footStep14 from "../../img/footsteps-silhouette-variant 14.svg";
import footStep15 from "../../img/footsteps-silhouette-variant 11.svg";
import footStep17 from "../../img/footsteps-silhouette-variant 17.svg";
import footStep18 from "../../img/footsteps-silhouette-variant 15.svg";
import footStep19 from "../../img/footsteps-silhouette-variant 19.svg";
import footStep20 from "../../img/footsteps-silhouette-variant 20.svg";
import footStep21 from "../../img/footsteps-silhouette-variant 21.svg";
import iconFacebook from "../../img/ri_facebook-box-fill.svg";
import iconTwitter from "../../img/bi_twitter.svg";
import iconLinkedin from "../../img/ri_linkedin-fill.svg";
import iconYoutube from "../../img/uil_youtube.svg";
import iconInstagram from "../../img/ph_instagram-logo-fill.svg";
import iconWhatsapp from "../../img/ic_baseline-whatsapp.svg";
import frame58 from "../../img/Frame58.svg";
import iconRocket from "../../img/Group.svg";
import iconGlobe from "../../img/gis_globe-share.svg";
import iconLogoFooter from "../../img/LogoFooter.svg";
import iconPayments from "../../img/Group 11.png";
import footerLine from "../../img/Line 10.svg";
import imageRectange51 from "../../img/Rectangle 51.png";
import imageCoins from "../../img/Rectangle 46.svg";
import imageBoyBrick from "../../img/Rectangle 48.svg";
import imageHandShake from "../../img/Rectangle 50.svg";
import bgCurve1 from "../../img/Rectangle 53.svg";
import bgCurve2 from "../../img/Rectangle 52.svg";
import line15 from "../../img/Line 15.svg";
import headerLogo from "../../img/Logo.svg";
import imageKids from "../../img/Rectangle 43.svg";
import iconMagGlass from "../../img/ph_magnifying-glass-light.svg";
import iconDropdown from "../../img/ic_baseline-arrow-drop-down.svg";
import iconHuman from "../../img/mdi_user.svg";
import iconMobile from "../../img/ic_round-send-to-mobile.svg";
import iconDropdownBig from "../../img/material-symbols_arrow-drop-down.svg";
import footerBackgroundImage from "../../img/Group copy 3.svg"
import "./style.css";

export const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="div-2">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src={bgCurve2} />
          <img className="img" alt="Rectangle" src={bgCurve1} />
          <div className="rectangle-2" />
          <img className="rectangle-3" alt="Rectangle" src={imageHandShake} />
          <div className="rectangle-4" />
          <div className="nav-bar-wrapper">
            <NavBar
              browseFundraisersClassName="nav-bar-2"
              className="nav-bar-instance"
              icBaselineArrowIcBaselineArrow={iconDropdown}
              phMagnifyingGlassPhMagnifyingGlass={iconMagGlass}
            />
          </div>
          <img className="frame-5" alt="Frame" src={headerLogo} />
          <img className="frame-6" alt="Frame" src={headerLogo} />
          <p className="raising-funds-was">
            Raising Funds was never this easy. Start a <br />
            fundraiser in 5 minutes!
          </p>
          <div className="rectangle-5" />
          <div className="rectangle-6" />
          <div className="rectangle-7" />
          <img className="rectangle-8" alt="Rectangle" src={imageKids} />
          <div className="frame-7">
            <div className="group-3">
              <div className="text-wrapper-3">20 Lakh+</div>
              <div className="text-wrapper-4">DONORS</div>
            </div>
            <div className="group-4">
              <img className="line" alt="Line" src={line15} />
              <div className="group-5">
                <div className="group-6">
                  <div className="text-wrapper-3">1 Lakh+</div>
                  <div className="text-wrapper-5">FUNDRAISERS</div>
                </div>
                <div className="group-7">
                  <img className="line" alt="Line" src={line15} />
                  <div className="group-8">
                    <div className="text-wrapper-3">0%</div>
                    <div className="text-wrapper-6">PLATFORM FEE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-8">
            <div className="group-3">
              <div className="text-wrapper-3">12 Lakh+</div>
              <div className="text-wrapper-4">DONORS</div>
            </div>
            <div className="group-4">
              <img className="line" alt="Line" src={line15} />
              <div className="group-5">
                <div className="group-6">
                  <div className="text-wrapper-3">2 Lakh+</div>
                  <div className="text-wrapper-5">FUNDRAISERS</div>
                </div>
                <div className="group-7">
                  <img className="line" alt="Line" src={line15} />
                  <div className="group-8">
                    <div className="text-wrapper-3">0%</div>
                    <div className="text-wrapper-6">PLATFORM FEE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="rectangle-9" alt="Rectangle9" src={imageCoins} />
          <img className="rectangle-10" alt="Rectangle10" src={imageBoyBrick} />
          <Buttonfill
            buttonClassName="design-component-instance-node-3"
            className="buttonfill-instance"
            text="Donate now"
          />
          <Buttonfill
            buttonClassName="design-component-instance-node-3"
            className="buttonfill-2"
            text="Donate now"
          />
          <p className="p">We know you are in urgent need of funds.</p>
          <p className="text-wrapper-7">
            Our personal fundraiser expert is waiting to get you started!
          </p>
          {/* <MaterialSymbolsArrowDropDown className="material-symbols-arrow-drop-down" /> */}
          <div className="frame-9">
            <div className="frame-wrapper">
              <div className="div-wrapper">
                <div className="frame-10">
                  <div className="frame-11">
                    <div className="frame-12111 homepageForm form-input">
                      {/* <MdiUser
                        className="design-component-instance-node-4"
                        mdiUser="/img/mdi-user-1.svg"
                      /> */}
                      {/* <div className="text-wrapper-8">Username</div> */}

                      <div className="form-element-wrapper">
                        <img src={iconHuman} alt="oops" className="icon-inside-form"></img>
                        {/* <MdiUser
                        className="design-component-instance-node-4"
                        mdiUser={iconHuman} /> */}
                        <input
                          className="form-input-1"
                          placeholder="Username"
                        />
                      </div>
                      <div className="form-element-wrapper">
                        <img src={iconMobile} alt="oops" className="icon-inside-form"></img>
                        {/* <IcRoundSendTo icRoundSendTo={iconMobile} /> */}
                        <input
                          className="form-input-1"
                          placeholder="Enter your Mobile Number"
                        />
                      </div>
                      <div className="form-element-wrapper">
                        <img src={iconDropdownBig} alt="oops" className="icon-inside-form"></img>
                        <select >
                        <option value="none" selected disabled hidden>What will be the funds used for?</option>
        
                          <option>option1</option>
                          <option>option2</option>
                          <option>option3</option>
                        </select>
                      </div>
                    </div>
                    {/* <img className="line-2" alt="Line" src="/img/line-11.svg" /> */}
                  </div>
                  {/* <div className="div-3">
                    <div className="frame-13">
                      <div className="div-3">
                        <div className="group-wrapper">
                          <div className="group-9">
                            <div className="text-wrapper-9">
                              Enter your Mobile Number
                            </div>
                            <IcRoundSendTo icRoundSendTo="/img/ic-round-send-to-mobile-1.svg" />
                          </div>
                        </div>
                        <img
                          className="line-3"
                          alt="Line"
                          src="/img/line-12.svg"
                        />
                      </div>
                    </div>
                  </div> 
                  <div className="frame-14">
                    <div className="p-wrapper">
                      <p className="text-wrapper-10">
                        What will be the funds used for?
                      </p>
                    </div>
                    <img
                      className="line-3"
                      alt="Line"
                      src="/img/line-11-1.svg"
                    />
                  </div>*/}
                </div>
              </div>
            </div>
            <div className="frame-15">
              <p className="text-wrapper-11">
                102 People started a fundraiser in last 2 days
              </p>
              <div className="group-10">
                <Buttonfill
                  className="buttonfill-3"
                  text="CONNECT ON WHATSAPP"
                />
                <Button
                  buttonClassName="design-component-instance-node-3"
                  className="button-instance"
                  text="GET A CALL"
                />
              </div>
            </div>
          </div>
          <div className="text-wrapper-12">What is Crowdfunding?</div>
          <p className="text-wrapper-13">
            In its simplest form, Crowdfunding is a practice of giving monetary
            funds to overcome specific social, cultural, or economic hurdles
            individuals face in their daily lives.
          </p>
          <img className="rectangle-11" alt="Rectangle" src={imageRectange51} />
          <MaterialSymbols className="material-symbols-play-circle-outline-rounded" />
          <p className="text-wrapper-14">
            So how does Crowdfunding work On Masoom Trust?
          </p>
          <p className="text-wrapper-15">
            Let us assume an individual, unfortunately, meets with an accident
            on the road. His medical expenses and hospital bills start piling
            up. Now he needs ₹5 Lakh to pay his expensive medical bills.
            Fortunately, his best friend signed up on Masoom Trust crowdfunding
            platform, completed the process of submitting valid documents needed
            for verification. In a few minutes, he created a crowdfunding
            campaign to raise funds for his friend’s medical expenses. Now, this
            campaign can be shared with all his near and dear ones through
            WhatsApp, Instagram, Twitter, Facebook and E-mail. In a matter of
            few minutes, funds start coming in to support the financial needs of
            the injured friend.
          </p>
        </div>
        <div className="overlap-group">
          <p className="text-wrapper-16">
            Start a Fundraiser in three simple steps
          </p>
          <img className="frame-16" alt="Frame" src={frame58} />
          <div className="overlap-2">
            <div className="overlap-3">
              <div className="overlap-4">
                <img
                  className="footsteps-silhouette"
                  alt="Footsteps silhouette"
                  src={footStep3}
                />
                <MajesticonsRocket majesticonsRocket={iconRocket} />
              </div>
              <p className="text-wrapper-17">
                It’ll take only 2 minutes. Just tell us a few details about you
                and the ones you are raising funds for.
              </p>
            </div>
            <div className="text-wrapper-18">1. Start your fundraiser</div>
          </div>
          <img
            className="footsteps-silhouette-2"
            alt="Footsteps silhouette"
            src={footStep4}
          />
          <img
            className="footsteps-silhouette-3"
            alt="Footsteps silhouette"
            src={footStep5}
          />
          <img
            className="footsteps-silhouette-4"
            alt="Footsteps silhouette"
            src={footStep6}
          />
          <img
            className="footsteps-silhouette-5"
            alt="Footsteps silhouette"
            src={footStep7}
          />
          <img
            className="footsteps-silhouette-6"
            alt="Footsteps silhouette"
            src={footStep8}
          />
          <img
            className="footsteps-silhouette-7"
            alt="Footsteps silhouette"
            src={footStep9}
          />
          <img
            className="footsteps-silhouette-8"
            alt="Footsteps silhouette"
            src={footStep11}
          />
          <img
            className="footsteps-silhouette-9"
            alt="Footsteps silhouette"
            src={footStep13}
          />
          <img
            className="footsteps-silhouette-10"
            alt="Footsteps silhouette"
            src={footStep14}
          />
          <img
            className="footsteps-silhouette-11"
            alt="Footsteps silhouette"
            src={footStep19}
          />
          <img
            className="footsteps-silhouette-12"
            alt="Footsteps silhouette"
            src={footStep20}
          />
          <img
            className="footsteps-silhouette-13"
            alt="Footsteps silhouette"
            src={footStep17}
          />
          <img
            className="footsteps-silhouette-14"
            alt="Footsteps silhouette"
            src={footStep19}
          />
          <img
            className="footsteps-silhouette-15"
            alt="Footsteps silhouette"
            src={footStep21}
          />
          <img
            className="footsteps-silhouette-16"
            alt="Footsteps silhouette"
            src={footStep10}
          />
          <img
            className="footsteps-silhouette-17"
            alt="Footsteps silhouette"
            src={footStep12}
          />
          <img
            className="footsteps-silhouette-18"
            alt="Footsteps silhouette"
            src={footStep18}
          />
          <p className="text-wrapper-19">
            All you need to do is share the fundraiser with your friends and
            family. In no time, support will start pouring in.
          </p>
          <div className="overlap-5">
            <div className="frame-17">
              <div className="text-wrapper-20">2.</div>
              <div className="text-wrapper-21">Share your fundraiser</div>
            </div>
            <GisGlobeShare
              className="gis-globe-share-instance"
              gisGlobeShare={iconGlobe}
            />
          </div>
          <p className="text-wrapper-22">
            Share your fundraiser directly from dashboard on social media.
          </p>
          <div className="frame-18">
            <div className="text-wrapper-23">3.</div>
            <div className="text-wrapper-24">Withdraw Funds</div>
          </div>
          <IconParkOutline className="icon-park-outline-funds" />
        </div>
        <p className="text-wrapper-25">
          The funds raised can be withdrawn without any hassle directly to your
          bank account.
        </p>
        <p className="text-wrapper-26">
          It takes only 5 minutes to withdraw funds on ketto.
        </p>
        <div className="frame-19">
          <Buttonfill
            buttonClassName="design-component-instance-node-3"
            className="design-component-instance-node-5"
            text="START A FUNDRAISER FOR FREE"
          />
          <Button
            buttonClassName="design-component-instance-node-3"
            className="design-component-instance-node-5"
            text="TALK TO US"
          />
        </div>
        <div className="frame-20">
          <p className="text-wrapper-27">
            Have any questions for us? Chat with our team on Facebook or
            WhatsApp now.
          </p>
          <div className="button-wrapper">
            <Button
              buttonClassName="design-component-instance-node-3"
              className="design-component-instance-node-5"
              text="CHAT WITH US"
            />
          </div>
        </div>
        <h1 className="h-1">We provide everything you need</h1>
        <div className="frame-21">
          <div className="frame-22">
            <div className="frame-23">
              <GameIconsPayMoney className="design-component-instance-node-4" />
              <div className="frame-24">
                <div className="text-wrapper-28">Payout</div>
                <p className="text-wrapper-29">
                  This is your money, you can withdraw it at any point during
                  the course of your fundraiser
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="overlap-6">
            <div className="overlap-group-2">
              <img
                className="footer-logo-image"
                alt="Clip path group"
                src={iconLogoFooter}
              />
              <img
                className="footer-background"
                alt="Clip path group1"
                src={footerBackgroundImage}
              />
              <img className="line-4" alt="Line" src={footerLine} />
              <div className="frame-25">
                <RiFacebookBoxFill
                  className="design-component-instance-node-4"
                  riFacebookBoxFill={iconFacebook}
                />
                <BiTwitter
                  biTwitter={iconTwitter}
                  className="design-component-instance-node-4"
                />
                <RiLinkedinFill
                  className="ri-linkedin-fill-instance"
                  riLinkedinFill={iconLinkedin}
                />
                <UilYoutube
                  className="uil-youtube-instance"
                  uilYoutube={iconYoutube}
                />
                <PhInstagramLogo
                  className="design-component-instance-node-4"
                  phInstagramLogo={iconInstagram}
                />
                <IcBaselineWhatsapp
                  className="design-component-instance-node-4"
                  icBaselineWhatsapp={iconWhatsapp}
                />
              </div>
              <p className="for-any-queries">
                For any queries
                <br />
                Email: <br />
                Contact No:
              </p>
              <div className="frame-26">
                <div className="text-wrapper-30">Causes</div>
                <p className="medical-crowdfunding">
                  Medical crowdfunding
                  <br />
                  Cancer Crowdfunding
                  <br />
                  Transplant Crowdfunding
                  <br />
                  Education Crowdfunding
                  <br />
                  Sports Crowdfunding
                  <br />
                  Child Welfare
                  <br />
                  Animal Fundraisers
                </p>
              </div>
              <div className="frame-27">
                <div className="text-wrapper-31">How it works?</div>
                <p className="fundraising-for-ngos">
                  Fundraising for NGOs
                  <br />
                  Sponsor A Child
                  <br />
                  Fundraising Tips
                  <br />
                  What is Crowdfunding?
                  <br />
                  Corporates
                  <br />
                  Withdraw Funds
                  <br />
                  Browse Fundraiser
                </p>
              </div>
              <div className="frame-28">
                <div className="text-wrapper-31">Support</div>
                <p className="medical-finance-faqs">
                  Medical Finance
                  <br />
                  FAQs &amp; Help Center
                  <br />
                  Are Masoom Trusts Genuine?
                  <br />
                  Fundraiser Video
                  <br />
                  Trust &amp; Safety
                  <br />
                  Plans &amp; Pricing
                  <br />
                  Contact Us
                </p>
              </div>
              <div className="frame-29">
                <div className="text-wrapper-32">About Us</div>
                <p className="team-masoom-trust-in">
                  Team Masoom Trust
                  <br />
                  In The News
                  <br />
                  Our Partners
                  <br />
                  Careers
                  <br />
                  Masoom Trust Blog
                  <br />
                  Success Stories
                </p>
              </div>
              <img className="group-11" alt="Group" src={iconPayments} />
            </div>
            <div className="text-wrapper-33">1.5M +</div>
            <div className="text-wrapper-34">Followers</div>
          </div>
        </footer>
      </div>
    </div>
  );
};
