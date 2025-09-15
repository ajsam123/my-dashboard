import {
  Home,
  User,
  Settings,
  Search,
  Heart,
  Star,
  Download,
  Upload,
  Edit,
  Trash2,
  Plus,
  Minus,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Mail,
  Phone,
  Camera,
  ImageIcon,
  Video,
  Music,
  File,
  Folder,
  Calendar,
  Clock,
  MapPin,
  Globe,
  Wifi,
  Battery,
  Volume2,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Shuffle,
  Repeat,
  Share,
  Copy,
  ExternalLink,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Shield,
  AlertTriangle,
  Info,
  CheckCircle,
  XCircle,
  Zap,
  Flame,
  Sun,
  Moon,
  Cloud,
  LucideIcon,
  TextIcon,
} from "lucide-react";
import Button from "./Button";
const images: Record<string, LucideIcon> = {
  Home,
  Video,
  Folder,
  ImageIcon,
  TextIcon,
};
export default function Header() {
  return (
    <div className="flex justify-between px-4">
      <div>
        <figure>
          <img src="" alt="" />
        </figure>
        <div>
          <figure>
            <img src="" alt="" />
          </figure>
          <span></span>
          <img src="" alt="" />
        </div>
      </div>
      <div className="bg-gray-200 flex gap-4">
        {Object.values(images).map((Icon: LucideIcon, index) => (
          <figure key={index} className="w-8 h-8">
            <Icon size={32} />
          </figure>
        ))}
      </div>
      <div>
        <Button icon={TextIcon}>Vksk</Button>
      </div>
    </div>
  );
}
