import { Alert, Button, Spinner } from "@heroui/react";


const HeroPage = () => {
    return (
        <div>
            <Button>Hero UI</Button>
            <Button variant="danger-soft">Hero UI</Button>
                  <Alert status="accent">
        <Alert.Indicator>
          <Spinner size="sm" />
        </Alert.Indicator>
        <Alert.Content>
          <Alert.Title>Processing your request</Alert.Title>
          <Alert.Description>
            Please wait while we sync your data. This may take a few moments.
          </Alert.Description>
        </Alert.Content>
      </Alert>
        </div>
    );
};

export default HeroPage;