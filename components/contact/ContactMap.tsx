export default function ContactMap() {
  return (
    <div className="pb-140px lg:pb-30 container">
      <div className="google-map h-[800px] relative z-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5!2d50.0!3d26.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49f0f0f0f0f0f0%3A0x0!2zMjbCsDI0JzAwLjAiTiA1MMKwMDAnMDAuMCJF!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
          style={{ height: "100%", width: "100%", border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </div>
  );
}
