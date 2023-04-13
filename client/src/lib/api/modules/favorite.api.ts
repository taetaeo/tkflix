import privateClient from "../client/private.client";
import { handleError } from "../utils/helpers";

const favoriteApiRoutes = {
  list: "user/favorites",
  add: "user/favorites",
  remove: ({ favoriteId }: { favoriteId: string }) =>
    `user/favorites/${favoriteId}`,
};

const favoriteApis = {
  getList: async ({ mediaType }: { mediaType: "tv" | "movie" }) => {
    try {
      const response = await privateClient.get(favoriteApiRoutes.list);
      return { response };
    } catch (error) {
      const { code, message } = handleError(error);
      return { error: { code, message } };
    }
  },
  add: async ({
    mediaId,
    mediaType,
    mediaTitle,
    mediaPoster,
    mediaRate,
  }: {
    mediaId: string;
    mediaType: "tv" | "movie";
    mediaTitle: string;
    mediaPoster: string;
    mediaRate: string;
  }) => {
    try {
      const response = await privateClient.post(favoriteApiRoutes.add, {
        mediaId,
        mediaType,
        mediaTitle,
        mediaPoster,
        mediaRate,
      });
      return { response };
    } catch (error) {
      const { code, message } = handleError(error);
      return { error: { code, message } };
    }
  },
  remove: async ({ favoriteId }: { favoriteId: string }) => {
    try {
      const response = await privateClient.delete(
        favoriteApiRoutes.remove({ favoriteId })
      );
      return { response };
    } catch (error) {
      const { code, message } = handleError(error);
      return { error: { code, message } };
    }
  },
};

export default favoriteApis;
