import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure";

export default class PartnerTable extends React.Component { 
  render() {
    return (
      <div>
      <Disclosure>
        <DisclosureButton><h3 className="fw7 mb2">Portland community college</h3></DisclosureButton>
        <DisclosurePanel>Here I am! I am the buried treasure!</DisclosurePanel>
      </Disclosure>
       <Disclosure>
       <DisclosureButton>Find out what lies beneath</DisclosureButton>
       <DisclosurePanel>Here I am! I am the buried treasure!</DisclosurePanel>
     </Disclosure></div>
    );
}

}
