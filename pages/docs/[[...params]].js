import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length == 1) {
    return <h1>Viewing the feature {params[0]}</h1>;
  } else if (params.length == 2) {
    return (
      <h1>
        Viewing the feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else {
    return <h1>docs page</h1>;
  }
};
export default Doc;

// note:
// [[...params]] wrap with one more extra square bracket used to optional catch all route.