export const runtime = "edge";

import Head from 'next/head'
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
        <header>
            <div className="profile-section">
                <img src="./images/profile-header.jpeg" alt="Profile Picture" className="profile-image" />
                <div className="title-section">
                    <h1>Chanel Munezero</h1>
                    <h4>Full Stack Software Engineer | JavaScript, PHP, Java, Databases, Cloud</h4>
                </div>
            </div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/cmunezero/" target="_blank">
                    <i className="fab fa-linkedin"/> LinkedIn
                </a>
                <a href="https://github.com/chanelmunez" target="_blank">
                    <i className="fab fa-github"/> GitHub
                </a>
            </div>
        </header>

        <main>
            <div className="portfolio-grid">
                <div className="portfolio-item" data-item="1">
                    <div className="item-img">
                        <img src="./images/motion-logo.png" alt="Motion Industries" />
                    </div>
                    <div className="item-description">
                        <p>Motion Industries</p>
                    </div>
                </div>
                <div className="portfolio-item" data-item="2">
                    <div className="item-img">
                        <img src="./images/getbenjamin-animated.png" alt="GetBenjamin" />
                    </div>
                    <div className="item-description">
                        <p>GetBenjamin</p>
                    </div>
                </div>
                <div className="portfolio-item" data-item="3">
                    <div className="item-img">
                        <img src="./images/prodatamg-logo.png" alt="ProDataMG" style={{background: 'white'}} />
                    </div>
                    <div className="item-description">
                        <p>ProDataMG</p>
                    </div>
                </div>
                <div className="portfolio-item" data-item="4">
                    <div className="item-img">
                        <img src="./images/autogroup-header.png" alt="Grand Rapids AutoGroup" />
                    </div>
                    <div className="item-description">
                        <p>Grand Rapids AutoGroup</p>
                    </div>
                </div>
                <div className="portfolio-item" data-item="5">
                    <div className="item-img">
                        <img src="./images/clevertech-logo.png" alt="CleverTech" />
                    </div>
                    <div className="item-description">
                        <p>CleverTech</p>
                    </div>
                </div>
                <div className="portfolio-item" data-item="6">
                    <div className="item-img">
                        <img src="./images/sambatv-logo.png" alt="SambaTV" style={{background: 'white'}} />
                    </div>
                    <div className="item-description">
                        <p>SambaTV</p>
                    </div>
                </div>
                <div className="portfolio-item" data-item="7">
                    <div className="item-img">
                        <img src="./images/soccer-data-analyst.png" alt="AddThis" style={{background: 'white'}} />
                    </div>
                    <div className="item-description">
                        <p>Soccer Data Analyst</p>
                    </div>
                </div>
                <div className="portfolio-item" data-item="8">
                    <div className="item-img">
                        <img src="./images/addthis-logo.png" alt="AddThis" style={{background: 'white'}} />
                    </div>
                    <div className="item-description">
                        <p>AddThis</p>
                    </div>
                </div>
                <div className="portfolio-item" data-item="9">
                    <div className="item-img">
                        <img src="./images/grooveshark-header.png" alt="Grooveshark Logo" />
                    </div>
                    <div className="item-description">
                        <p>Grooveshark</p>
                    </div>
                </div>
            </div>

            <div className="hover-box" id="hover-box-1" data-item="1">
                <div className="hover-header">
                    <h2>Motion Industries</h2>
                    <button className="close-btn"><i className="fas fa-times"></i></button>
                </div>
                <div className="hover-content">
                    <div className="image-grid">
                        <img src="./images/motion-bars.png" alt="Motion Bars" />
                        <img src="./images/motion-dashboard.png" alt="Motion Dashboard" />
                        <img src="./images/motion-widgets.png" alt="Motion Widgets" />
                    </div>
                    <ul className="project-details">
                        <li>Add functionality for sales and inventory management systems using ExtJS, Java API and DB2</li>
                        <li>Interface with inventory and sales process to decrease inventory levels and increase sales</li>
                    </ul>
                </div>
            </div>
            <div className="hover-box" id="hover-box-2" data-item="2">
                <div className="hover-header">
                    <h2>GetBenjamin</h2>
                    <button className="close-btn"><i className="fas fa-times"></i></button>
                </div>
                <div className="hover-content">
                    <div className="image-grid">
                        <img src="./images/getbenjamin-calendar.png" alt="GetBenjamin Calendar" />
                        <img src="./images/getbenjamin-chat.png" alt="GetBenjamin Chat" />
                    </div>
                    <ul className="project-details">
                        <li>Eliminated errors in finance portfolio integrations with PHP/SQL using AWS (EC2, RDS, SQS, SNS)</li>
                        <li>Refactored email alerts and correspondents for client relations with React</li>
                    </ul>
                </div>
            </div>
            <div className="hover-box" id="hover-box-3" data-item="3">
                <div className="hover-header">
                    <h2>ProDataMG</h2>
                    <button className="close-btn"><i className="fas fa-times"></i></button>
                </div>
                <div className="hover-content">
                    <div className="image-grid">
                        <img src="./images/prodatamg-landing.png" alt="ProDataMG Screenshot" />
                        <img src="./images/prodatamg-laptop.png" alt="ProDataMG Laptop" />
                        <img src="./images/prodatamg-line.png" alt="ProDataMG Line" />
                        <img src="./images/prodatamg-map.png" alt="ProDataMG Map" />
                    </div>
                    <ul className="project-details">
                        <li>Enhanced client relations with better user experience using React, NodeJS and SQL for marketing landing pages</li>
                        <li>Improved admin dashboard functionality in ExtJS and NodeJS to increase click-through rate for marketing campaigns</li>
                        <li>Developed microservices in PHP to centralize data access controls to SQL and MongoDB</li>
                    </ul>
                </div>
            </div>
            <div className="hover-box" id="hover-box-4" data-item="4">
                <div className="hover-header">
                    <h2>Grand Rapids AutoGroup</h2>
                    <button className="close-btn"><i className="fas fa-times"></i></button>
                </div>
                <div className="hover-content">
                    <div className="image-grid">
                        <img src="./images/autogroup-alerts.png" alt="AutoGroup Alerts" />
                        <img src="./images/autogroup-header.png" alt="AutoGroup Header" />
                        <img src="./images/autogroup-screen.png" alt="Autogroup Screen" />
                        <img src="./images/autogroup-trucks.png" alt="AutoGroup Trucks" />
                        <img src="./images/autogroup-welcome.png" alt="AutoGroup Welcome" />
                    </div>
                    <ul className="project-details">
                        <li>Replaced legacy site with React/Redux and NodeJS for SEO and lead generation</li>
                        <li>Implemented data solution and dashboard to view, merge and facilitate data sharing across dealerships utilizing AWS</li>
                    </ul>
                </div>
            </div>
            <div className="hover-box" id="hover-box-5" data-item="5">
                <div className="hover-header">
                    <h2>CleverTech</h2>
                    <button className="close-btn"><i className="fas fa-times"></i></button>
                </div>
                <div className="hover-content">
                    <div className="image-grid">
                        <img src="./images/clevertech-live.png" alt="CleverTech Live" />
                        <img src="./images/clevertech-movement.png" alt="CleverTech Movement" />
                        <img src="./images/clevertech-screens.png" alt="CleverTech Screens" />
                    </div>
                    <ul className="project-details">
                        <li>Designed interactive soccer data portal in React/Redux for coaches, players and scouts</li>
                        <li>Built NodeJS microservices for analysis using Python and Postgres API on Docker running on AWS EC2</li>
                        <li>Created NodeJS ETL process to transform video event information from Cassandra into Postgres for efficient analysis</li>
                    </ul>
                </div>
            </div>
            <div className="hover-box" id="hover-box-6" data-item="6">
                <div className="hover-header">
                    <h2>SambaTV</h2>
                    <button className="close-btn"><i className="fas fa-times"></i></button>
                </div>
                <div className="hover-content">
                    <div className="image-grid">
                        <img src="./images/sambatv-ratings.png" alt="SambaTV Ratings" />
                        <img src="./images/sambatv-realtime.png" alt="SambaTV Realtime" />
                        <img src="./images/sambatv-recomendations.png" alt="SambaTV Redomendations" />
                        <img src="./images/sambatv-top.png" alt="SambaTV Top" />
                    </div>
                    <ul className="project-details">
                        <li>Built analytics dashboards using React/Redux, NodeJS server and Postgres with custom visualizations and ad hoc query analysis</li>
                        <li>Created processing pipeline in Python for tv/advertising data for unique insights into viewing and web behavior to increase sales and for advertising optimizations</li>
                    </ul>
                </div>
            </div>
            <div className="hover-box" id="hover-box-7" data-item="7">
                <div className="hover-header">
                    <h2>Soccer Data Analyst</h2>
                    <button className="close-btn"><i className="fas fa-times"></i></button>
                </div>
                <div className="hover-content">
                    <div className="image-grid">
                        <img src="./images/soccer-data-screen.png" alt="Soccer Data Screen" />
                    </div>
                    <ul className="project-details">
                        <li>Developed models for optimizing scouting reports, starting lineups, formations, and in-game personnel and strategy changes using Python and Java machine learning algorithms</li>
                        <li>Launched D3 dashboards using ExtJS for easy access to underlying data, visualizations and analysis using SQL</li>
                    </ul>
                </div>
            </div>
            <div className="hover-box" id="hover-box-8" data-item="8">
                <div className="hover-header">
                    <h2>AddThis</h2>
                    <button className="close-btn"><i className="fas fa-times"></i></button>
                </div>
                <div className="hover-content">
                    <div className="image-grid">
                        <img src="./images/addthis-line.png" alt="AddThis Line" />
                        <img src="./images/addthis-content.png" alt="AddThis Content" />
                        <img src="./images/addthis-buttons.png" alt="AddThis Buttons" />
                        <img src="./images/addthis-sharethis.png" alt="AddThis ShareThis" />
                        <img src="./images/addthis-placement.png" alt="AddThis Placement" />
                    </div>
                    <ul className="project-details">
                        <li>Provided data analysis to optimize business operations built with Java (Spring Framework), SQL, D3, Hydra (internal data warehouse) and Backbone/jQuery with custom ETL solutions with Jenkins CI/CD</li>
                        <li>Spearheaded analytics dashboards using Angular/Ember frameworks, D3 chart library, PHP and Java based in-house data warehouse</li>
                    </ul>
                </div>
            </div> 
            <div className="hover-box" id="hover-box-9" data-item="9">
                <div className="hover-header">
                    <h2>Grooveshark</h2>
                    <button className="close-btn"><i className="fas fa-times"></i></button>
                </div>
                <div className="hover-content">
                    <div className="image-grid">
                        <img src="./images/grooveshark-explore.png" alt="Grooveshark Explore" />
                        <img src="./images/grooveshark-playlist.png" alt="Grooveshark Playlist" />
                        <img src="./images/grooveshark-search.png" alt="Grooveshark Search" />
                    </div>
                    <ul className="project-details">
                        <li>Contributed to large-scale PHP backend API’s for SQL, Memcache, Redis and MongoDB</li>
                        <li>Directed backend API’s (PHP, C++, Java, Hadoop, Hive, Python) to provide search, music recommendations and near real-time analytics</li>
                        <li>Transformed C/C++ Sphinx framework for custom search engine with machine learning to optimize results, autocomplete, and handle natural language processing</li>
                        <li>Engineered Hadoop/Hive (Java and Python) data warehouse for personalization, data analytics dashboard, and business intelligence to drive user growth and revenues in subscriptions and advertising</li>
                    </ul>
                </div>
            </div>
        
        </main>

        <script src="script.js" />
    </>
  );
};

