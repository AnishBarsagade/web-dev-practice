function FeatureCard({ title, description, bgClass, children }) {
  return (
    <div className={`card ${bgClass}`}>
      <div className="card-content">
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
      </div>

      {/* Children allows toggle switch and progress dots to render inside */}
      {children && <div className="card-footer">{children}</div>}
    </div>
  );
}

export default FeatureCard;
