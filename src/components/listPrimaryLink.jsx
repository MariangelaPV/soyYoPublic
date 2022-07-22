import { PrimaryLink } from "./primaryLink";

export const ListPrimaryLink = ({ linkList }) => {
  return (
    <>
      {linkList.length > 0 ? (
        <>
          {linkList.map((link) => (
            <PrimaryLink
              key={link.docId}
              socialMedia={link.socialmedia}
              title={link.title}
              url={link.url}
            ></PrimaryLink>
          ))}
        </>
      ) : (
        ""
      )}
    </>
  );
};
