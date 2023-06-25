import { IAppConfigKeyPath, IAppConfigKeyPathValue } from "./type"

type IDefaultAppConfig<T extends IAppConfigKeyPath> = {
    [K in T] ?: IAppConfigKeyPathValue<K>
};

const defaultAppConfig: IDefaultAppConfig<IAppConfigKeyPath> = {
    'playMusic.whenQualityMissing': 'lower',
    'playMusic.defaultQuality': 'standard',
    'playMusic.clickMusicList': 'replace',
    'playMusic.caseSensitiveInSearch': false,
    'playMusic.playError': 'pause',
    'normal.closeBehavior': 'minimize'
} as const;

export default defaultAppConfig;