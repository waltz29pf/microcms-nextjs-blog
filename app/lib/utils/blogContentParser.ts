import * as cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

export function parseContent(content: string): string {
  const $ = cheerio.load(content);

  // コードブロックの処理
  $("pre").each((_, element) => {
    const parent = $(element).parent();
    const filename = parent.attr("data-filename");
    parent.addClass("my-5");

    $(element)
      .find("code")
      .each((_, codeElement) => {
        const codeText = $(codeElement).text();
        const className = $(codeElement).attr("class") || "";
        const languageMatch = className.match(/language-(\w+)/);
        const language = languageMatch ? languageMatch[1] : "plaintext";

        try {
          const result = hljs.highlight(codeText, { language });
          $(codeElement).html(result.value);
          $(codeElement).addClass("hljs");
        } catch (highlightError) {
          console.error("Highlight.js error:", highlightError);
          $(codeElement).text(codeText);
        }
      });

    if (filename) {
      $(element).before(
        `<div class="bg-[#0D1117] text-white py-1 px-3 text-sm inline-block">${filename}</div>`
      );
    }
  });

  // その他の要素にスタイルを適用
  $("code").addClass("bg-gray-100 rounded dark:bg-gray-800 py-1 px-2 text-sm");
  $("p").addClass(
    "text-base sm:text-lg mt-4 mb-8 leading-8 dark:text-gray-200"
  );
  $("h1").addClass(
    "text-3xl font-bold my-7 border-b pb-2 dark:text-white dark:border-gray-700"
  );
  $("h2").addClass(
    "pl-3 text-2xl font-bold my-7 pb-3 border-b-2 dark:text-gray-200 dark:border-gray-600 mb-0 mt-14"
  );
  $("h3").addClass(
    "pl-4 border-l-4 border-gray-300 text-xl font-bold mb-3 mt-10 dark:text-gray-200 dark:border-gray-600"
  );
  $("h4").addClass("text-lg font-bold my-5 dark:text-white");
  $("h5").addClass("text-md font-bold my-5 dark:text-white");
  $("ul").addClass(
    "list-disc ml-5 my-2 sm:my-4 leading-7 text-base sm:text-lg dark:text-gray-300"
  );
  $("ol").addClass(
    "list-decimal ml-5 my-2 sm:my-4 leading-7 text-base sm:text-lg dark:text-gray-300"
  );
  $("blockquote").addClass(
    "border-l-4 pl-4 py-1 italic my-5 bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
  );
  $("table").addClass(
    "table-auto border-collapse border my-5 dark:border-gray-700"
  );
  $("th, td").addClass("border px-4 py-1 dark:border-gray-700");
  $("th").addClass("bg-gray-50 dark:bg-gray-800 dark:text-white");
  $("a").addClass("text-blue-500 underline dark:text-blue-400");
  $("img").addClass("my-5");
  $("hr").addClass("my-5 dark:border-gray-300");

  return $.html();
}
