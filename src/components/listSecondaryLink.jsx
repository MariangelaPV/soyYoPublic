import { SecondaryLink } from "./secondaryLink";

export const ListSecondaryLink = ({ linkList,bg,bgHover }) => {
  return (
    <>
      {linkList.length > 0 ? (
        <>
          {linkList.map((link) => (
            <SecondaryLink
              bg={bg}
              bgHover={bgHover}
              key={link.docId}
              socialMedia={link.socialmedia}
              title={link.title}
              url={link.url}
            ></SecondaryLink>
          ))}
        </>
      ) : (
        ""
      )}
    </>
  );
};
