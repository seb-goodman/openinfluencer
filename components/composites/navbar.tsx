import { FC } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between h-20 gap-4 px-8 border-b bg-background md:px-6">
      {/* Desktop menu */}
      <nav className="flex-col hidden gap-8 text-lg md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <img src="/logo-short.svg" alt="Logo" className="w-6 h-6" />
          <span className="sr-only">Open Influencer</span>
        </a>
      </nav>

      <div className="flex items-center justify-center h-5 space-x-4 text-md max-md:hidden">
        <Separator orientation="vertical" />
        <a
          href="##"
          className="transition-colors text-muted-foreground hover:text-foreground"
        >
          Features
        </a>
        <Separator orientation="vertical" />
        <a
          href="##"
          className="transition-colors whitespace-nowrap text-muted-foreground hover:text-foreground"
        >
          About us
        </a>
      </div>

      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="w-5 h-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="grid gap-6 text-lg font-medium">
            <a
              href="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <img src="/logo-short.svg" alt="Logo" className="w-6 h-6" />
              <span className="sr-only">Open Influencer</span>
            </a>
            <a
              href="##"
              className="text-muted-foreground hover:text-foreground"
            >
              Features
            </a>
            <a
              href="##"
              className="text-muted-foreground hover:text-foreground"
            >
              About us
            </a>
          </nav>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* Auth buttons */}
      <div className="flex items-center justify-end w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Button asChild>
          <a href="/auth/log-in">Log in</a>
        </Button>
        <Button asChild variant="outline">
          <a href="/auth/sign-up">Sign up</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
