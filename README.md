# 聊天機器人與個人網站結合  

[影片說明](https://youtu.be/NVrCk_Os0Iw)    


📖 專案簡介  
本專案將 React 前端應用 與 個人靜態網頁 整合，  
在個人網站中加入 Gemini AI 聊天功能，讓訪客能與模型互動、獲取餐廳、料理或行程建議。  
整體設計風格與個人網頁一致，強化展示與互動性。  
✨ 功能與特色  
💬 Gemini 聊天輔助  
直接串接 Google Gemini API，可即時回覆使用者問題。  
提供常見主題提示（如餐廳推薦、行程規劃、料理靈感等）。  
支援輸入模型名稱（如 gemini-2.5-flash）與自訂 API Key。  
可選擇「記住 Key」功能，透過 localStorage 儲存在本機端，方便重啟後繼續使用。  
對話區塊支援多輪互動，並自動滾動到最新回覆。  
🧩 版面整合  
React 元件嵌入在 index.html 的 #react-root 中，不覆蓋原有靜態內容。  
可由首頁按鈕呼叫 scrollToAItest()，自動捲動到聊天區塊。  
介面簡潔、色調與個人網站主題一致。  
響應式設計，適合桌機與行動裝置使用。  
🔗 使用的 API  
套件名稱： @google/genai  
主要用途： 文字生成（對話回應、建議、說明）  
使用範例：  
import { GoogleGenAI } from "@google/genai";  

const genAI = new GoogleGenAI({ apiKey: "YOUR_API_KEY" });  

const result = await genAI.models.generateContent({  
  model: "gemini-2.5-flash", 
  contents: "幫我推薦台北的美食"  
});  
⚠️ 注意事項：  
本專案為示範用途，API Key 會暫存在瀏覽器 localStorage。  
正式部署時請在伺服器端建立 代理層 (proxy)，以確保金鑰安全。  
⚙️ 安裝與執行方式  
建立 React 專案  
npx create-react-app@latest my-app  
將 AItest.js（主要 AI 功能檔案）放入 src/ 資料夾中。  
修改以下檔案：  
index.js：載入並渲染 AI 組件。  
index.html：新增 #react-root 容器，嵌入在個人網頁結構中。  
啟動開發伺服器  
npm start  




