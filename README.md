<p align="center">
  <img src="./icon_128.png" />
</p>

# 极简翻译-谷歌版

由于 https://translate.google.cn 节点关闭，此版本将翻译源更换为 https://translate.google.com，便能继续正常使用。

## 功能特点

- 划词即译：选中文字后自动显示翻译结果
- 中英互译：自动识别中英文，进行相应翻译
- 极简设计：界面简洁，使用方便
- 快捷开关：使用 Ctrl+Alt 快速开启/关闭划词翻译功能

## 环境要求

- Node.js 14.0 或以上版本
- npm 6.0 或以上版本
- Chrome 浏览器 88 或以上版本

## 安装与使用

### 方法一：直接安装（推荐）

1. 下载本项目的 `chrome` 目录下的所有文件
2. 打开 Chrome 浏览器，访问 `chrome://extensions/`
3. 开启右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择刚才下载的 `chrome` 目录

### 方法二：从源码编译安装

1. 克隆项目到本地：
   ```bash
   git clone [项目地址]
   cd translator_extension
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 编译项目：
   ```bash
   npx tsc
   ```

4. 复制必要文件：
   ```bash
   mkdir -p chrome
   cp blank.css icon_16.png icon_48.png icon_128.png manifest.json popup.html chrome/
   ```

5. 在 Chrome 中加载扩展：
   - 打开 Chrome 浏览器，访问 `chrome://extensions/`
   - 开启右上角的"开发者模式"
   - 点击"加载已解压的扩展程序"
   - 选择项目中的 `chrome` 目录

## 使用说明

1. 安装完成后，在 Chrome 工具栏会出现翻译图标
2. 选中任意文字，会自动显示翻译结果
3. 使用 Ctrl+Alt 快捷键可以快速开启/关闭划词翻译功能
4. 点击工具栏图标可以进行更多设置

## 常见问题

1. 如果扩展显示"已停用，因为它已不再受支持"，请按照上述步骤重新安装最新版本
2. 如果翻译功能无响应，请检查网络连接是否正常
3. 如果快捷键无效，请检查是否与其他扩展的快捷键冲突

## 技术支持

如果您在使用过程中遇到任何问题，请提交 Issue。
