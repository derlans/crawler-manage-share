import {
  favoriteCommunityProject,
  likeCommunityProject,
  unfavoriteCommunityProject,
  unlikeCommunityProject,
} from '@/api/community';
import { renderIcon } from '@/utils';
import { LikeOutlined, LikeFilled, StarFilled, StarOutlined } from '@vicons/antd';
import { h } from 'vue';

export const columns = [
  {
    title: '名称',
    key: 'name',
    width: 100,
  },
  {
    title: '描述',
    key: 'description',
    width: 160,
  },
  {
    title: '创建日期',
    key: 'createdAt',
    width: 160,
    render(row) {
      return new Date(row.createdAt).toLocaleString();
    },
  },
  {
    title: '点赞',
    key: 'likeCount',
    width: 60,
    render(row) {
      const onClick = async () => {
        if (row.isLike) {
          await unlikeCommunityProject({ _id: row._id });
          row.likeCount--;
        } else {
          await likeCommunityProject({ _id: row._id });
          row.likeCount++;
        }
        row.isLike = !row.isLike;
      };
      if (row.isLike)
        return h('span', { style: 'color: #1890ff', onClick }, [
          renderIcon(LikeFilled)(),
          row.likeCount,
        ]);
      return h('span', { onClick }, [renderIcon(LikeOutlined)(), row.likeCount]);
    },
  },
  {
    title: '收藏',
    key: 'favoriteCount',
    width: 60,
    render(row) {
      const onClick = async () => {
        if (row.isFavorite) {
          await unfavoriteCommunityProject({ _id: row._id });
          row.favoriteCount--;
        } else {
          await favoriteCommunityProject({ _id: row._id });
          row.favoriteCount++;
        }
        row.isFavorite = !row.isFavorite;
      };
      if (row.isFavorite)
        return h('span', { style: 'color: #1890ff', onClick }, [
          renderIcon(StarFilled)(),
          row.favoriteCount,
        ]);
      return h('span', { onClick }, [renderIcon(StarOutlined)(), row.favoriteCount]);
    },
  },
];
