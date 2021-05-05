import React from "react"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"

class Faq extends React.Component {
  render() {
    return (
      <section className="faq-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>
              Frequently Asked <span>Question</span>
            </h2>
            <p>After a roller coaster ride of techpot one may get puzzled about our company and its concept here we list out simple questions with answers one may get</p>
          </div>

          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                <Accordion>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>What is the concept of a virtual company?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>Vitual company is where we operate our best brains in a cloud network so, that we can reduce the cost for setting up a huge commercial space in this approach we can setup company in a small place and with less manpower and other basic utilities.</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>What type of oppurtunity do you provide for freelancers and entrepreneur?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>This is a platform where we can give best oppurtunity for freelances with the skills they have to get their desired work and timezone they want to work for a assigned project For entrepreneurs with a idea we work towards setting up a platform for their ideas and required skills to accomplish the project.</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>What are the technologies that you use specifically for a given project?</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>We use updated versions of the latest technologies for web development we use React.js for building user interfaces and React was maintained by facebook. Also other like Angular,Mean stack , Javascript and Javascript based libraries,For mobile development we use ReactNative and swift for ios platform , kotlin for android and for AR VR we use A frame and AR development kit with all solutions for both front end and backend developments.</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  {/*<AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                Is free will real or just an illusion?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                In ad velit in ex nostrud dolore cupidatat consectetur
                                                ea in ut nostrud velit in irure cillum tempor laboris
                                                sed adipisicing eu esse duis nulla non.
                                            </p>
                                        </AccordionItemPanel>
                                   </AccordionItem>*/}
                </Accordion>
              </div>
            </div>

            {/*<div className="col-lg-5 col-md-12">
        <div className="image"></div>
                        </div>*/}
          </div>
        </div>
      </section>
    )
  }
}

export default Faq
