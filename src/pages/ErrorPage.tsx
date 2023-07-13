import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Heading>Ooops..</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "An unexpected error occurred!"}
      </Text>
    </>
  );
};

export default ErrorPage;
