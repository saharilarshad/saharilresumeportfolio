import CV from "../../assets/Resume_Saharil_Arshad.pdf"

export default function CTA() {
  return (
    <div className="cta">
        <a className="btn" href={CV} download>Download My CV</a>
        <a className="btn btn-primary" href="#contact">Let's Talk</a>
    </div>
  )
}
