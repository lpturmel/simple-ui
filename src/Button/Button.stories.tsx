import Button from "./Button";

export default {
    component: Button,
    title: "UI/Button",
};

export const Default = () => (
    <Button
        _hover={{
            bg: "yellow.800",
        }}
        _active={{
            bg: "yellow.900",
        }}
        bg="yellow.600"
        px={4}
        py={2}
    >
        Button
    </Button>
);
