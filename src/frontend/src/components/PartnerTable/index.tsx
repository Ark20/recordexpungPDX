import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure";

class PartnerTable extends React.Component {
  render() {
    let partnerData = [
      {
        details: [
          ["Analysis Cost", "Free"],
          ["Filing Cost", "NA"],
          ["Income Restrictions", " Under 45k Annual"],
          ["Locations", "Portland Metro"],
          ["Court Fees", "Not Included"],
        ],
        name: "Portland Community College",
        area: "Portland Metro",
        instructions: "Send an email with ...",
        contacts: ["email@domain.com", "555-555-5555"],
      },
      {
        details: [
          ["Analysis Cost", "Free"],
          ["Filing Cost", "NA"],
          ["Income Restrictions", " Under 45k Annual"],
          ["Locations", "Portland Metro"],
          ["Court Fees", "Not Included"],
        ],
        name: "Portland Community College",
        area: "Portland Metro",
        instructions: "Send an email with ...",
        contacts: ["email@domain.com", "555-555-5555"],
      },
    ];
    let partners;

    partners = partnerData.map((partner, index) => (
      <li className="bt bw2 b--lightest-blue1">
        <Disclosure>
          <DisclosureButton className="flex-ns w-100 relative navy hover-blue pv3 ph3 ph4-ns">
            <span className="w-70 db fw7 pr3 mb2 mb0-ns">{partner.name}</span>
            <span className="w-30 pr3"> {partner.area}</span>
            <span className="absolute top-0 right-0 pt3 ph3">
              <span aria-hidden="true" className="fas fa-angle-down"></span>
            </span>
          </DisclosureButton>
          <DisclosurePanel>
            <div className="bl bw2 f5 b--blue pb3 ph3 ml3 ml4-ns">
              <ul className="list mb3">
                {partner.details.map((detail, index) => (
                  <li className="flex-ns mb3">
                    <span className="w4-ns db fw6 mr3">{detail[0]}</span>
                    <span>{detail[1]}</span>
                  </li>
                ))}
              </ul>
              <p className="mw6 bt b--black-10 pv3">{partner.instructions}</p>
              <ul className="list mb3">
                <li className="fw6 mb3">{partner.contacts[0]}</li>
                <li className="fw6 mb2">{partner.contacts[1]}</li>
              </ul>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </li>
    ));

    return (
      <React.Fragment>
        <div className="bg-navy pv6">
          <div className="mw7 center">
            <div className="mh4">
              <h2 className="white tc f3 f2-ns fw9 mb3">
                Are you looking to clear your record?
              </h2>
              <p className="white tc center mw6 mb4">
                Select a partner below near you. They can provide your analysis
                and help you file for expungement.
              </p>
            </div>
            <div className="ba bw3 br3 b--lightest-blue1 bg-white mb6">
              <h3 className="f3 fw9 pa4">Partners</h3>
              <ul className="list">{partners}</ul>
            </div>

            <span className="db w4 center bb bw2 b--blue mb3"></span>
            <p className="tc white mw7 mh4">
              Over 1,060 analyses delivered as of June 11, 2020
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PartnerTable;