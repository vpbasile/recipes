import { LinkIcon } from "@chakra-ui/icons";
import { Button, Center, Link, Stack, Text } from "@chakra-ui/react";
import ColorModeButton from "../colorModeButton";

export default function Footer() {
    return (<Center id="footer" borderTop={`2px`} paddingTop={'xl'} w={'full'}>
        <Stack dir="vertical">
            <ColorModeButton />
            <Button leftIcon={<LinkIcon />}><Link isExternal href="https://chakra-ui.com/">ChakraUI</Link></Button>
            <Button leftIcon={<LinkIcon />}><Link isExternal href="https://github.com/vpbasile/recipes">GitHub Repository</Link></Button>
            <Button leftIcon={<LinkIcon />}><Link isExternal href="https://chakra-ui.com/docs/components/icon/usage#all-icons">Icon Reference</Link></Button>
            <Button leftIcon={<LinkIcon />}><Link isExternal href="https://chakra-ui-cheatsheet.vercel.app/">Cheat Sheet</Link></Button>
            <Button leftIcon={<LinkIcon />}><Link isExternal href="https://play.chakra-ui.com/playground">Playground</Link></Button>
        <Text>Recipe Display</Text>
        </Stack>
    </Center>)
}