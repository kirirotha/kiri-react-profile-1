import React from 'react';

class Resume extends React.Component {

    render(){
        return (
            <div className="resume-window">
                <h1>
                    Employment History
                </h1>
                <div className="work-title">
                    <div>
                        <h4>Bullhorn </h4><h5>Software Developer</h5>
                    </div>
                    <h5>
                        {`February 2021 – Currently Employed
                        Houston, Texas`}
                    </h5>
                </div>
                
                
                <p>    
                    {
                    `• Contributed to the backend code of a web-based application using Java, Spring, Sql
                    • Maintianed and improved frontend UI experience using Angular and Javascript
                    • Helped with product release and deploy cycles
                    • Assisted with Agile and Scrum procedures`}
                </p>
                <br/>
                <div className="work-title">
                    <div>
                        <h4>Reservoir Geophysical Corp </h4><h5>Geophysicist</h5>
                    </div>
                    <h5>
                        {`Jan 2018 – May 2020
                        Houston, Texas`}
                    </h5>
                </div>
                
                
                <p>    
                    {
                    `• Handled 2D and 3D seismic processing for for subsurface exploration
                    • Juggled multiple seismic projects with tight deadlines covering different types of objectives
                    • Provided ongoing project updates and created detailed reports to clearly communicate project steps
                    • Played a key role in data management, technical support and website design`}
                </p>
                <br/>
                <div className="work-title">
                    <div>
                        <h4>Seimax Technologies</h4><h5>Depth Imaging Geophysicist</h5>
                    </div>
                    <h5>
                        {`Aug 2014 – Jan 2018
                        Houston, Texas`}
                    </h5>
                </div>
                <p>
                    {
                    `• Produced seismic depth migration volumes of complex subsurface structures for oil and gas companies
                    • Designed velocity models to migrate seismic data to match with geologic observations and well data
                    • Used Kirchhoff, Wave Equation and Reverse Time Migration (RTM) algorithms to image the subsurface
                    • Interacted with geoscientists from various companies to ensure their objectives were being imaged properly
                    • Established training programs to educate employees on software and technical subjects`}
                </p>
                <br/>
                <div className="work-title">
                    <div>
                        <h4>GeoCenter LP</h4><h5>Processing Geophysicist</h5>
                    </div>
                    <h5>
                        {`Oct 2012 – Aug 2014
                        Houston, Texas`}
                    </h5>
                </div>    
                <p>
                {
                `• Processed 2-D and 3-D seismic datasets in land, marine and transitional settings
                • Coordinated with other employees on my team to produce large, multi-survey seismic merges
                • Mastered many aspects of seismic processing techniques in the time domain
                • Maintained positive, transparent, productive relationships with clients while handling their data
                • Delivered scientific presentations to staff and clients on technical subjects `}
                </p>
                <br/>
                <div className="work-title">
                    <div>
                        <h4>Kiri’s Coffee Shop</h4><h5>Owner</h5>
                    </div>
                    <h5>
                        {`Nov 2006 – Jan 2009
                        Burnet, Texas`}
                    </h5>
                </div>  
                <p>{
                `• Opened a small coffee shop in 2006.
                • Handled all aspects of the business from accounting to inventory to customer service.
                • Managed a skilled team of baristas and cashiers.`}
                </p>
                <br/>
                <hr/>
                <br/>
                <h1>
                    Academic Background
                </h1>
                <div className="work-title">
                    <div>
                        <h4>Flatiron School </h4><h5>Full Stack Web Development, Ruby on Rails and JavaScript program</h5>
                    </div>
                    <h5>
                        {`Jul 2020 – Oct 2020
                        Houston, Texas`}
                    </h5>
                </div>
                <br/>
                <div className="work-title">
                    <div>
                        <h4>University of Houston </h4>
                        <h5>M.S. Geology</h5>
                    </div>
                    <h5>
                        {`Aug 2012 - Dec 2015
                        Houston, Texas`}
                    </h5>
                </div>
                <br/>
                <div className="work-title">
                    <div>
                        <h4>University of Houston </h4>
                        <h5>B.S. Geology</h5>
                    </div>
                    <h5>
                        {`Jan 2009 - Aug 2012
                        Houston, Texas`}
                    </h5>
                </div>
                <br/>
                <div className="work-title">
                    <div>
                        <h4>University of Houston </h4>
                        <h5>B.S. Geophysics</h5>
                    </div>
                    <h5>
                        {`Jan 2009 - Aug 2012
                        Houston, Texas`}
                    </h5>
                </div>
                <br/>
                <br/>
                <hr/>
                <br/>
                <h1>
                    Technical Skills
                </h1>
                <p>{
                `• Ruby
                • Rails
                • SQL
                • Javascript
                • React
                • C++
                • Matlab
                • R
                • HTML
                • CSS
                • Git
                • API
                • Mapbox
                • Seismic data processing
                • Geologic mapping
                • Geophysical interpretation
                • Research
                • Data analysis
                `}
                </p>
            </div>
        )
    }
}
export default Resume