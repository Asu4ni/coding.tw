#include <fstream>
#include <string>
using std::getline;

int main(void)
{
	std::ifstream fin(".items");
	std::ofstream fout("html.txt");
	std::string input, name;
	while(getline(fin, name)){
		fout <<	"<li class=\"item ";
		getline(fin, input);
		fout << input << "\"onclick=\"itemClick(this)\"><header class=\"itemHeader\"><a class=\"itemTitle\"href=\"";
		getline(fin, input);
		fout << input << "\"target=\"_blank\">" << name << "</a><span class=\"suitableness\">- �A�X";
		getline(fin, input);
		fout << input << " (";
		getline(fin, input);
		fout << input << ")</span></header><section class=\"itemInfo\"><img class=\"thumbnail\"src=\"img/";
		getline(fin, input);
		fout << input << "\"alt=\"" << name << "�Y��\"><section class=\"infoDes\">";
		getline(fin, input);
		fout << input << "</section></section></li>" << std::endl;
		getline(fin, input);
	}
	return 0;
}
/*
<chinese name>
rsEasy / rsNorm / rsChal
<site url> (http://www.scratchjr.org/)
<suitable age> (5~10��)
<translation> (�������)
<img file> (scratchjr_img.png)
<description> (XXXXX<br>XXXX)
*/

