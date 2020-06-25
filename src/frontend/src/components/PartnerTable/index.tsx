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
          <DisclosureButton>
                        <div className="flex-ns  bg-white br3 pa3 ba b--white hover-b-blue">
                          <div className="w-50-ns fw6 pa2 pr3">
                            Portland Community College
                          </div>
                          <div className="w-50-ns pa2 pr3">Northeast Portland</div>
                        </div>

        </DisclosureButton>
        <DisclosurePanel>Here I am! I am the buried treasure!</DisclosurePanel>
     </Disclosure></div>
    );
}

}
