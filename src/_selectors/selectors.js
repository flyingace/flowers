const poems = (store) => store.PoemData.poems;

export const TOCData = (store) => {
  return poems(store)
    .map((poem) => {
      const {
        poemId,
        poemIndex,
        poemNumber,
        poemSection,
        poemTitle,
        poemTitleFrench,
        poemTitleTOC,
      } = poem;

      return {
        poemId,
        poemIndex,
        poemNumber,
        poemSection,
        poemTitle,
        poemTitleFrench,
        poemTitleTOC,
      };
    })
    .sort((a, b) => {
      return parseInt(a.poemIndex, 10) - parseInt(b.poemIndex, 10);
    });
};
