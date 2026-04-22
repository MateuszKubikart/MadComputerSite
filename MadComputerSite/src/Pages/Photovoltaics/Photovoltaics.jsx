import { Zap, TrendingDown, Leaf, ShieldCheck, Grid, ClipboardCheck, PenTool, Wrench, Wifi, CheckCircle2, ArrowRight } from "lucide-react";
import "./Photovoltaics.css";

function Photovoltaics() {
  return (
    <div className="pv-page">
      {/* HERO SECTION */}
      <section className="pv-hero">
        <div className="container">
          <div className="pv-hero-grid">
            <div className="hero-content">
              <div className="badge badge-green solid mb-4" style={{ marginBottom: '16px' }}>
                <Zap size={14} /> RENEWABLE ENERGY SOLUTIONS
              </div>
              <h1 className="hero-title">
                Future-Proof Your Home <br />
                with <span className="text-primary">Sustainable Power</span>
              </h1>
              <p className="hero-description">
                Reduce your electricity bills by up to 80% and contribute to a greener planet. Mad Computer provides high-efficiency photovoltaic installations with lifetime technical support.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary">Get Free Quote</button>
                <button className="btn btn-outline">View Our Work</button>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="img-placeholder" style={{ aspectRatio: '4/3' }}>
                <span style={{ color: '#aaa' }}>Solar Image Placeholder</span>
              </div>
              <div className="savings-card">
                <div className="savings-header">
                  <Zap size={16} color="var(--color-green)" />
                  <strong>Energy Savings</strong>
                </div>
                <p>Estimated average savings of $1,500 per year for a standard 5kW system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Mad Computer Solar?</h2>
            <p className="section-subtitle">We combine engineering precision with premium hardware to deliver systems that outlast and outperform.</p>
          </div>

          <div className="bento-grid-pv">
             {/* Card 1 */}
             <div className="p-card card-savings">
               <div className="p-card-content">
                 <div className="card-icon green-icon bg-transparent">
                   <TrendingDown size={28} />
                 </div>
                 <h3>Significant Financial Savings</h3>
                 <p>Lock in your energy rates for the next 25 years. With rising utility costs, your investment in solar becomes more valuable every single year. Most systems pay for themselves within 5-7 years.</p>
                 <span className="live-status mt-auto"><span className="dot"></span> Live Efficiency Tracking</span>
               </div>
               <div className="placeholder-chart">
                 <div className="bar bar-1"></div>
                 <div className="bar bar-2"></div>
                 <div className="bar bar-3"></div>
               </div>
             </div>

             {/* Card 2 */}
             <div className="p-card card-green text-white">
               <div className="p-card-content">
                 <div className="card-icon text-white mb-4">
                   <Leaf size={32} />
                 </div>
                 <h3 style={{color: 'white'}}>Eco-Friendly Impact</h3>
                 <p style={{color: '#e5e7eb'}}>A single residential system reduces CO2 emissions equivalent to planting 150 trees every year.</p>
               </div>
             </div>

             {/* Card 3 */}
             <div className="p-card">
               <div className="p-card-content">
                 <div className="card-icon red-icon">
                   <ShieldCheck size={24} />
                 </div>
                 <h3>25-Year Warranty</h3>
                 <p>Peace of mind with our comprehensive industry-leading guarantees on both parts and labor.</p>
               </div>
             </div>

             {/* Card 4 */}
             <div className="p-card p-0 flex-row">
                <div className="p-card-content flex-1">
                  <div className="card-icon green-icon">
                    <Grid size={24} />
                  </div>
                  <h3>Tier-1 Components</h3>
                  <p>We exclusively use high-performance modules and smart inverters from leading manufacturers like Jinko, Huawei, and Growatt.</p>
                </div>
                <div className="placeholder-texture"></div>
             </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Installation Process</h2>
            <p className="section-subtitle">Professional execution from initial audit to grid connection.</p>
          </div>

          <div className="process-steps">
            <div className="step">
              <div className="step-icon"><ClipboardCheck size={28} /></div>
              <h4>1. Energy Audit</h4>
              <p>Free site survey and consumption analysis.</p>
            </div>
            <div className="step">
              <div className="step-icon"><PenTool size={28} /></div>
              <h4>2. Custom Design</h4>
              <p>Tailored 3D model for maximum sun exposure.</p>
            </div>
            <div className="step">
              <div className="step-icon"><Wrench size={28} /></div>
              <h4>3. Professional Build</h4>
              <p>One-day expert installation by certified teams.</p>
            </div>
            <div className="step">
              <div className="step-icon"><Wifi size={28} /></div>
              <h4>4. Grid Sync</h4>
              <p>Final connection and mobile app setup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETED PROJECTS */}
      <section className="projects-section">
         <div className="container">
           <div className="projects-header">
             <div>
               <h2 className="section-title">Completed Projects</h2>
               <p className="section-subtitle">See how we've helped local businesses and homeowners.</p>
             </div>
             <a href="#" className="view-gallery">View Full Gallery <ArrowRight size={16}/></a>
           </div>

           <div className="projects-grid">
              <div className="project-card">
                <div className="img-placeholder project-img">
                  <div className="badge badge-green solid project-badge">120kWp Commercial</div>
                </div>
                <div className="project-info">
                  <h4>Industrial Park Delta</h4>
                  <p>Reduced annual operating costs by 45%.</p>
                </div>
              </div>

              <div className="project-card">
                <div className="img-placeholder project-img">
                  <div className="badge badge-green solid project-badge">8kWp Residential</div>
                </div>
                <div className="project-info">
                  <h4>The Green Residence</h4>
                  <p>Energy independence for a family of five.</p>
                </div>
              </div>

              <div className="project-card">
                <div className="img-placeholder project-img">
                  <div className="badge badge-green solid project-badge">50kWp Farm</div>
                </div>
                <div className="project-info">
                  <h4>Eco-Farm Valley</h4>
                  <p>Solar-powered irrigation and cooling systems.</p>
                </div>
              </div>
           </div>
         </div>
      </section>

      {/* FORM SECTION */}
      <section className="pv-form-section">
        <div className="container">
          <div className="form-grid">
            <div className="form-content text-white">
              <h2 className="section-title text-white">Ready to Switch to Solar?</h2>
              <p className="form-desc">Fill out the form and our technical expert will prepare a preliminary system design and cost analysis within 24 hours.</p>
              
              <ul className="form-benefits">
                <li><CheckCircle2 color="var(--color-green)" size={20} /> Free on-site technical consultation</li>
                <li><CheckCircle2 color="var(--color-green)" size={20} /> Personalized ROI calculations</li>
                <li><CheckCircle2 color="var(--color-green)" size={20} /> Assistance with government subsidies</li>
              </ul>
            </div>

            <div className="form-card">
              <form className="solar-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label>Property Type</label>
                  <select>
                    <option>Residential House</option>
                    <option>Commercial Building</option>
                    <option>Farm / Agriculture</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message (Optional)</label>
                  <textarea placeholder="Tell us about your roof type or energy needs..." rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary form-submit">Request My Free Analysis</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Photovoltaics;
