import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Sparkles, CheckCircle } from "lucide-react";

type MintClipFormProps = {
  isOpen: boolean;
  onClose: () => void;
  onConnectWallet: () => void;
  isConnected: boolean;
};

const MintClipForm = ({ isOpen, onClose, onConnectWallet, isConnected }: MintClipFormProps) => {
  const [formData, setFormData] = useState({
    postLink: "",
    tiktokUsername: "",
    instagramUsername: "",
    xUsername: "",
    facebookUsername: "",
    youtubeChannel: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showWalletWarning, setShowWalletWarning] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.postLink.trim()) {
      newErrors.postLink = "Post link is required";
    } else if (!formData.postLink.startsWith("http")) {
      newErrors.postLink = "Please enter a valid URL";
    }
    
    if (!formData.tiktokUsername.trim()) newErrors.tiktokUsername = "Username is required";
    if (!formData.instagramUsername.trim()) newErrors.instagramUsername = "Username is required";
    if (!formData.xUsername.trim()) newErrors.xUsername = "Username is required";
    if (!formData.facebookUsername.trim()) newErrors.facebookUsername = "Username is required";
    if (!formData.youtubeChannel.trim()) newErrors.youtubeChannel = "Channel is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected) {
      setShowWalletWarning(true);
      setTimeout(() => setShowWalletWarning(false), 3000);
      return;
    }
    
    if (validateForm()) {
      // In a real app, you would submit the form data here
      console.log("Form submitted:", formData);
      onClose();
      // Reset form
      setFormData({
        postLink: "",
        tiktokUsername: "",
        instagramUsername: "",
        xUsername: "",
        facebookUsername: "",
        youtubeChannel: "",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <DialogContent 
            className="sm:max-w-md max-w-xs w-full mx-auto bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-purple-500/30 backdrop-blur-lg shadow-2xl shadow-purple-500/20"
            style={{ 
              transform: 'translate(-50%, -50%) rotateX(8deg) rotateY(5deg)',
              perspective: '1000px'
            }}
          >
            <DialogHeader className="text-center">
              <DialogTitle className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                <Sparkles className="text-yellow-400" />
                Mint Your Clip
              </DialogTitle>
              <DialogDescription className="text-gray-300 mt-2">
                Connect your social media accounts to mint your FameFi clip
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="py-2">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Post Link *</label>
                  <Input
                    name="postLink"
                    value={formData.postLink}
                    onChange={handleInputChange}
                    placeholder="https://tiktok.com/..."
                    className={`bg-gray-800 border ${errors.postLink ? 'border-red-500' : 'border-gray-700'} text-white`}
                  />
                  {errors.postLink && <p className="text-red-400 text-xs mt-1">{errors.postLink}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">TikTok Username *</label>
                  <Input
                    name="tiktokUsername"
                    value={formData.tiktokUsername}
                    onChange={handleInputChange}
                    placeholder="@username"
                    className={`bg-gray-800 border ${errors.tiktokUsername ? 'border-red-500' : 'border-gray-700'} text-white`}
                  />
                  {errors.tiktokUsername && <p className="text-red-400 text-xs mt-1">{errors.tiktokUsername}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Instagram Username *</label>
                  <Input
                    name="instagramUsername"
                    value={formData.instagramUsername}
                    onChange={handleInputChange}
                    placeholder="@username"
                    className={`bg-gray-800 border ${errors.instagramUsername ? 'border-red-500' : 'border-gray-700'} text-white`}
                  />
                  {errors.instagramUsername && <p className="text-red-400 text-xs mt-1">{errors.instagramUsername}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">X (Twitter) Username *</label>
                  <Input
                    name="xUsername"
                    value={formData.xUsername}
                    onChange={handleInputChange}
                    placeholder="@username"
                    className={`bg-gray-800 border ${errors.xUsername ? 'border-red-500' : 'border-gray-700'} text-white`}
                  />
                  {errors.xUsername && <p className="text-red-400 text-xs mt-1">{errors.xUsername}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Facebook Username *</label>
                  <Input
                    name="facebookUsername"
                    value={formData.facebookUsername}
                    onChange={handleInputChange}
                    placeholder="@username"
                    className={`bg-gray-800 border ${errors.facebookUsername ? 'border-red-500' : 'border-gray-700'} text-white`}
                  />
                  {errors.facebookUsername && <p className="text-red-400 text-xs mt-1">{errors.facebookUsername}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">YouTube Channel *</label>
                  <Input
                    name="youtubeChannel"
                    value={formData.youtubeChannel}
                    onChange={handleInputChange}
                    placeholder="channel name or @username"
                    className={`bg-gray-800 border ${errors.youtubeChannel ? 'border-red-500' : 'border-gray-700'} text-white`}
                  />
                  {errors.youtubeChannel && <p className="text-red-400 text-xs mt-1">{errors.youtubeChannel}</p>}
                </div>
              </div>
              
              <div className="mt-6">
                {showWalletWarning && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-red-700/50 to-red-800/50 border border-red-500/50 rounded-lg p-3 mb-3 text-center"
                  >
                    <p className="text-red-300 text-sm">
                      <span className="font-bold">Wallet Required!</span> Please connect your wallet to mint your clip.
                    </p>
                  </motion.div>
                )}
                
                {isConnected ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-700/30 to-emerald-800/30 border border-green-500/30 rounded-lg p-2 mb-3"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-300 text-sm">Wallet connected!</span>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-700/30 to-orange-800/30 border border-yellow-500/30 rounded-lg p-2 mb-3"
                  >
                    <Wallet className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-300 text-sm">Wallet not connected</span>
                  </motion.div>
                )}
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-lg shadow-purple-500/30"
                >
                  Mint Clip & Earn $FAME
                </Button>
              </div>
            </form>
            
            <div className="text-center text-xs text-gray-400 mt-2">
              Connect your wallet to verify your social media accounts and mint your FameFi clip
            </div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
};

export default MintClipForm;