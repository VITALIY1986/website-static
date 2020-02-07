import React from "react"
import "../global.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/hero.png";
import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"

const IndexPage = () => (
    <Layout>
        <SEO title="Make your Staff and Workspace Happy"/>

        <div className={"page-header home"}>
            <h1>Make your Staff and Workspace Happy</h1>
            <p>HiStaff gives your complex the opportunity to increase the percentage of happiness<br/>and enjoyment of your staff and as a result, bring productivity to your workspace.</p>
            <img alt={"Dashboard"} src={featureImage}/>
            





        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent}/>
                            </div>
                        </div>
                  
                      
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
  Запустить модальное окно
</button>


<div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      sdgasdgsdg
      tdyityidtyi
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Create and Join Events</h2>
                                <p>Save your time and energy by letting HiStaff to manage your events (handle the colleague’s birthday, gathering, etc.)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Public Board</h2>
                                <p>Let the staff write down on the board freely,<br/>Joking with each other and writing cool content can make the workplace more diverse and attractive for employees. </p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailBoard}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailNews}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Internal News</h2>
                                <p>Get rid of sending news by e-mail and its problems; post the news in an internal and attractive format via HiStaff instead.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Teams</h2>
                                <p>HiStaff let you add staff in specific teams and manage them easily.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Team"} src={thumbnailTeams}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Users"} src={thumbnailStaff}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Staff management</h2>
                                <p>Discard traditional ways to archive staff documents and information, and try new ways to store and archive them in HiStaff easily.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Sign up for free</h2>
                    <p>Sign up and start increasing the productivity of your business with HiStaff.</p>
                </div>

                <div className={"button"}>
                    <a href="https://app.histaff.io" target={"_blank"}>Get Started</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
