import { Search } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center">
          <span className="text-xl font-bold tracking-tight">Devlly</span>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <Search className="size-4 text-muted-foreground" />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search..." />
          </InputGroup>
        </div>

        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
