import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { HardHat, LoaderCircle } from "lucide-react";

type DevelopmentPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DevelopmentPopup = ({ isOpen, onClose }: DevelopmentPopupProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      // Simulate progress loading
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 75) {
            clearInterval(interval);
            return 75;
          }
          return prev + 1;
        });
      }, 30);

      return () => clearInterval(interval);
    } else {
      setProgress(0); // Reset progress when closed
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <DialogContent
            className="sm:max-w-md max-w-xs w-full mx-auto bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-blue-500/30 backdrop-blur-lg shadow-2xl shadow-blue-500/20"
            style={{
              transform: 'translate(-50%, -50%) rotateX(5deg) rotateY(5deg)',
              perspective: '1000px'
            }}
          >
            <DialogHeader className="text-center">
              <DialogTitle className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                <HardHat className="text-yellow-400" />
                Application Under Development
              </DialogTitle>
              <DialogDescription className="text-gray-300 mt-2">
                Thank you for your interest in FameFi! Please note that the application is currently in active development.
              </DialogDescription>
            </DialogHeader>

            <div className="py-4">
              <div className="mb-4">
                <div className="flex justify-between text-sm text-white mb-1">
                  <span>Development Progress</span>
                  <span className="font-bold">{progress}%</span>
                </div>

                {/* Enhanced 3D progress bar */}
                <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden border border-gray-600 shadow-inner">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-20" />
                </div>

                {/* Percentage indicator */}
                <div className="mt-1 text-center text-xs text-cyan-300 font-mono">
                  {progress < 75 ? "Building..." : "Ready for launch!"}
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mt-4">
                <LoaderCircle className="w-4 h-4 text-cyan-400 animate-spin" />
                <span className="text-cyan-400 text-sm font-medium">Building amazing features for you...</span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2">
                {[
                  { label: "UI Components", done: progress > 20 },
                  { label: "Smart Contracts", done: progress > 40 },
                  { label: "Integrations", done: progress > 60 },
                  { label: "Testing", done: progress > 50 },
                  { label: "Optimizations", done: progress > 65 },
                  { label: "Final touches", done: progress > 70 }
                ].slice(0, 6).map((item, index) => (
                  <motion.div
                    key={index}
                    className={`text-xs p-2 rounded text-center border ${
                      item.done
                        ? "bg-gradient-to-b from-green-600/30 to-green-800/30 text-green-300 border-green-500/50"
                        : "bg-gradient-to-b from-gray-700/50 to-gray-800/50 text-gray-400 border-gray-600/50"
                    }`}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className={`w-3 h-3 rounded-full mx-auto mb-1 ${item.done ? 'bg-green-400' : 'bg-gray-500'}`} />
                    {item.label}
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 text-center text-xs text-gray-400">
                {progress < 75
                  ? `Development in progress. Estimated completion: ${75 - progress}% remaining.`
                  : 'Development complete! You can now explore the application.'}
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={onClose}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30"
              >
                Acknowledge
              </Button>
            </div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
};

export default DevelopmentPopup;