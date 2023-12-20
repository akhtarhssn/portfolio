import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { IoIosCloseCircle } from "react-icons/io";

const CelebrationModal = ({ celebration, setCelebration }) => {
  useEffect(() => {
    if (celebration) {
      // Trigger confetti animation when the modal is open
      const end = Date.now() + 5000;
      const colors = ["#bb0000", "#ffffff"];

      function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }

      frame();
    }
  }, [celebration]);

  return (
    celebration && (
      <div className="fixed top-0 left-0 w-full bg-gray-800 z-50">
        <div className=" h-screen flex justify-center items-center max-w-3xl mx-auto">
          <div className="text-center p-36 bg-white rounded-lg relative text-black">
            <div className="absolute top-10 right-10">
              <IoIosCloseCircle
                size={30}
                onClick={() => setCelebration(false)}
                className="cursor-pointer"
              />
            </div>
            <h2 className="text-3xl font-semibold">
              🎉 Thank you for reaching out! 🎉
            </h2>
            <p style={{ fontSize: "1.2em", marginTop: "20px" }}>
              We've received your message and our team will get back to you as
              soon as possible.
            </p>
            <p style={{ fontSize: "1.2em", marginTop: "10px" }}>
              In the meantime, feel free to explore more on our website. Cheers!
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default CelebrationModal;
