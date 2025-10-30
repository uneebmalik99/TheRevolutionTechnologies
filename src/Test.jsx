import React, { useState, useEffect, useCallback } from "react";

const Test = () => {
 const testimonials = [
   {
     name: "Malik Noman",
     position: "COO - Amsev",
     message:
       "Malik is a motivated, hard-working CEO with exceptional skills and integrity. His leadership inspires the team to excel daily.",
   },
   {
     name: "Matthias Madeja",
     position: "CTO - SmileUnion",
     message:
       "Highly recommended! Uneeb is dedicated, reliable, and professional. He brings unique knowledge and patience to every project.",
   },
   {
     name: "John Galvagno",
     position: "CTO - Rubicon Performance",
     message:
       "Uneeb has been an absolute treat to work with! He goes above and beyond to deliver exactly what's required.",
   },
   {
     name: "Waheed",
     position: "CEO - MMW",
     message:
       "Perfect as always! Uneeb patiently incorporates new inputs and consistently brings better ideas to the table.",
   },
   {
     name: "Charlie",
     position: "CTO - XYZ",
     message:
       "Exceptional work! Uneeb's patience with project changes and his innovative ideas make him a valuable partner.",
   },
 ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNext]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <div style={styles.badge}>TESTIMONIALS</div>
        <div style={styles.quoteIcon}>"</div>
        <h2 style={styles.subtitle}>What Our Clients Say</h2>
      </div>

      <div style={styles.sliderWrapper}>
        <button
          onClick={handlePrev}
          className="nav-button"
          style={styles.navButton}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fece3c"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div style={styles.sliderContainer}>
          <div style={styles.testimonialCard} key={currentIndex}>
            <div style={styles.decorativeTop}></div>
            <p style={styles.message}>{testimonials[currentIndex].message}</p>
            <div style={styles.authorSection}>
              <div style={styles.divider}></div>
              <h3 style={styles.name}>{testimonials[currentIndex].name}</h3>
              <p style={styles.position}>
                {testimonials[currentIndex].position}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="nav-button"
          style={styles.navButton}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fece3c"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <div style={styles.dotsContainer}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              ...styles.dot,
              ...(index === currentIndex ? styles.dotActive : {}),
            }}
            onMouseEnter={(e) => {
              if (index !== currentIndex) {
                e.currentTarget.style.backgroundColor =
                  "rgba(254, 206, 60, 0.5)";
              }
            }}
            onMouseLeave={(e) => {
              if (index !== currentIndex) {
                e.currentTarget.style.backgroundColor =
                  "rgba(254, 206, 60, 0.3)";
              }
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .nav-button {
            padding: 5px !important;
          }
          .nav-button svg {
            width: 24px !important;
            height: 24px !important;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    Height: "500px",
    backgroundColor: "#fdfbf7",
    padding: "80px 20px 120px",
    position: "relative",
    overflow: "hidden",
  },
  headerContainer: {
    textAlign: "center",
    marginBottom: "40px",
    animation: "fadeInUp 1s ease-out",
  },
  badge: {
    display: "inline-block",
    color: "#fece3c",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "3px",
    marginBottom: "20px",
    padding: "8px 24px",
    border: "2px solid #fece3c",
    borderRadius: "30px",
    backgroundColor: "rgba(254, 206, 60, 0.1)",
    transition: "all 0.3s ease",
  },
  quoteIcon: {
    fontSize: "120px",
    color: "#fece3c",
    fontFamily: "Georgia, serif",
    lineHeight: "0.8",
    opacity: "0.3",
    fontWeight: "bold",
    margin: "10px 0",
    animation: "float 3s ease-in-out infinite",
  },
  subtitle: {
    fontSize: "32px",
    fontWeight: "600",
    color: "#333333",
    marginTop: "5px",
    marginBottom: "0",
  },
  sliderWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 10px",
  },
  navButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "10px",
    transition: "transform 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: "0.8",
  },
  sliderContainer: {
    width: "100%",
    maxWidth: "900px",
    position: "relative",
  },
  testimonialCard: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "50px 40px 40px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
    position: "relative",
    minHeight: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    animation: "slideIn 0.6s ease-out",
  },
  "@media (maxWidth: 768px)": {
    testimonialCard: {
      padding: "40px 25px 30px",
      minHeight: "300px",
      borderRadius: "15px",
    },
  },
  decorativeTop: {
    position: "absolute",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80px",
    height: "4px",
    backgroundColor: "#fece3c",
    borderRadius: "0 0 4px 4px",
  },
  message: {
    fontSize: "17px",
    lineHeight: "1.8",
    color: "#333333",
    marginBottom: "30px",
    fontStyle: "italic",
    textAlign: "center",
  },
  authorSection: {
    textAlign: "center",
    marginTop: "auto",
  },
  divider: {
    width: "50px",
    height: "2px",
    backgroundColor: "#fece3c",
    margin: "0 auto 20px",
    borderRadius: "2px",
  },
  name: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#333333",
    marginBottom: "8px",
  },
  position: {
    fontSize: "15px",
    color: "#b6b6b6",
    fontWeight: "500",
    letterSpacing: "0.5px",
  },
  dotsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: "40px",
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "rgba(254, 206, 60, 0.3)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    padding: "0",
  },
  dotActive: {
    backgroundColor: "#fece3c",
    transform: "scale(1.3)",
  },
};

export default Test;
