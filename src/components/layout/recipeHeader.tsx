import { Center, Heading, Image, Link } from "@chakra-ui/react";

export default function Header() {
    

    // Stuff for toggling the menu
    // const [isOpen, setIsOpen] = useState(false)
    // const toggle = () => setIsOpen(!isOpen)

    // function MenuToggle({ toggle, isOpen }: { toggle: () => void, isOpen: boolean }) {
    //     return (<Box display={{ base: "block", md: "none" }} onClick={toggle}>
    //         {isOpen ? <CloseIcon /> : <MenuIcon />}
    //     </Box>);
    // }

    return (<Center id="header" borderBottom={`2px`} marginBottom={'xl'} verticalAlign={2}>
            <Heading id="AppTitle" flex={3} as={'h1'} height={'100px'} p={7}><Link href="/">Recipe Display</Link></Heading>
        <Image src="/pumpkin.svg" alt="Pumpkin" boxSize="100px" p={2}/>
    </Center >)
}