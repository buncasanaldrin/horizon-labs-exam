import DefaultLayout from "@/components/layouts/DefaultLayout";

const withDefaultLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
  return (props: P) => {
    return (
      <DefaultLayout>
        <WrappedComponent {...props} />
      </DefaultLayout>
    );
  };
};

export default withDefaultLayout;
